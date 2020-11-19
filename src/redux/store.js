import { useMemo } from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer, { root as homeSaga } from './modules/home';
import Api from './api';
import { createLogger } from 'redux-logger';

let store;

const rootReducer = () =>
  combineReducers({
    home: homeReducer,
  });

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const initStore = (initialState) => {
  const logger = createLogger({ collapsed: true }); // log every action to see what's happening behind the scenes.
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer(), initialState, bindMiddleware([sagaMiddleware, logger]));

  store.sagaTask = sagaMiddleware.run(homeSaga, Api);

  return store;
};

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;
  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
