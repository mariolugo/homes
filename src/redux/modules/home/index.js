import { HomeData } from '../../../models';
import { call, fork, put, takeEvery } from 'redux-saga/effects';

const PER_PAGE = 12;

// creating an immutable initial state
const initialState = new HomeData();

//ACTION TYPES

// declared the actions types that we are going to use
const FETCH_HOMES = 'modules/home/FETCH_HOMES';
const FETCH_HOMES_SUCCESS = 'modules/home/FETCH_HOMES_SUCCESS';
const FETCH_HOMES_ERROR = 'modules/home/FETCH_HOMES_ERROR';
const PAGINATE_NEXT_PAGE = 'modules/home/PAGINATE_NEXT_PAGE';

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
    // set total of elements
    const total = payload.homes.length;
    // set totalPages
    const totalPages = Math.ceil(total / PER_PAGE);
    // get all the homes
    const homes = payload.homes;
    newState = newState.merge({
      fetching: false,
      homes,
      // load 12 documents to start with.
      currentHomes: homes.slice(0, PER_PAGE),
      currentCount: PER_PAGE,
      totalPages,
      total,
      currentPage: 1,
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

/**
 *
 * @param {*} state
 * @param {*} payload
 */
const onPaginateNextPage = (state, payload) => {
  console.log('payload', payload);
  let newState = state;
  // get the current page
  const currentPage = newState.get('currentPage');
  console.log('currentPage', currentPage);
  const currentCount = newState.get('currentCount');
  const homes = newState.get('homes');
  // get if it is nextPage (+1) or prevPage (-1)
  const addPages = payload.page;
  // set current page (current page + next page)
  const nextPage = currentPage + addPages;

  let nextHomes;
  let nextCount;
  if (addPages === 1) {
    // move up page, add 12 homes
    const upperCount = currentCount + PER_PAGE;
    const lowerCount = currentCount;

    // our count per page
    nextCount += currentCount;

    nextHomes = homes.slice(lowerCount, upperCount);
  }

  if (addPages === -1) {
    const upperCount = currentCount;
    const lowerCount = currentCount - PER_PAGE;

    nextCount -= lowerCount;
    nextHomes = homes.slice(lowerCount - PER_PAGE, upperCount - PER_PAGE);
  }

  console.log('nextPage', nextPage);

  window.history.pushState({ page: 1 }, 'title 1', `?page=${nextPage}`);

  newState = newState.merge({
    currentPage: nextPage,
    currentCount: nextCount,
    currentHomes: nextHomes,
  });

  return newState;
};

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

    case PAGINATE_NEXT_PAGE:
      return onPaginateNextPage(state, payload);
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

export const paginateNextPage = ({ page }) => ({
  type: PAGINATE_NEXT_PAGE,
  payload: { page },
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

// SELECTORS
export const getCurrentHomes = (state) => state.home.get('currentHomes');
export const getTotalHomes = (state) => state.home.get('total');
export const getTotalPages = (state) => state.home.get('totalPages');
export const getCurrentPage = (state) => state.home.get('currentPage');
