import { HomeData } from '../../../models';
import { call, fork, put, takeEvery } from 'redux-saga/effects';

// creating an immutable initial state
const initialState = new HomeData();

//ACTION TYPES

// declared the actions types that we are going to use
const FETCH_HOMES = 'modules/home/FETCH_HOMES';
const FETCH_HOMES_SUCCESS = 'modules/home/FETCH_HOMES_SUCCESS';
const FETCH_HOMES_ERROR = 'modules/home/FETCH_HOMES_ERROR';

// STATE IMMUTABLE HELPERS

/**
 *
 * @param {*} state
 */
const onFetch = (state) =>
  state.merge({
    fetching: true,
  });

/**
 *
 * @param {*} state
 * @param {*} {payload}
 */
const onFetchSuccess = (state, payload) => {
  let newState = state;

  if (payload.homes) {
    newState = newState.merge({
      fetching: false,
      homes: payload.homes,
    });
  }

  return newState;
};

/**
 *
 * @param {*} state
 * @param {*} {error}
 */
const onFetchError = (state, { error }) =>
  state.merge({ fetching: false, fetchStatus: 500, fetchErrorMessage: error });

// REDUCERS

/**
 *
 * @param {*} state
 * @param {*} action
 */

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_HOMES:
      return onFetch(state);

    case FETCH_HOMES_SUCCESS:
      return onFetchSuccess(state, payload);

    case FETCH_HOMES_ERROR:
      return onFetchError(state, payload);

    default:
      return state;
  }
}

// ACTIONS CREATORS

/**
 *
 */
export const fetchHomes = () => ({
  type: FETCH_HOMES,
});

/**
 *
 * @param {*} data
 */
export const fetchHomesSuccess = (data) => ({
  type: FETCH_HOMES_SUCCESS,
  payload: data,
});

/**
 *
 * @param {*} error
 */
export const fetchHomesError = (error) => ({
  type: FETCH_HOMES_ERROR,
  error,
});

//SAGAS

/**
 *
 * @param {*} api
 */
function* getHomeWorker(api) {
  try {
    const homesResponse = yield call(api.get, '/homes');
    const successAction = fetchHomesSuccess(homesResponse.data);
    yield put(successAction);
  } catch (e) {
    console.log(e);
    const errorAction = fetchHomesError(e);
    yield put(errorAction);
  }
}

/**
 *
 * @param {*} api
 */
function* watchHomes(api) {
  yield takeEvery(FETCH_HOMES, getHomeWorker, api);
}

/**
 *
 * @param {*} api
 */
export function* root(api) {
  yield fork(watchHomes, api);
}

// SELECTOR
export const getHomes = (state) => {
  return state.home;
};
