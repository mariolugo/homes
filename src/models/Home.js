import { Record, Map } from 'immutable';

const HomeData = Record({
  homes: new Map(),
  total: 0,
  currentPage: 0,
  totalPages: 0,
  // all the current homes in the current page
  currentHomes: new Map(),
  currentCount: 0,
  fetching: true,
  fetchErrorMessage: '',
  fetchStatus: 200,
});

export default HomeData;
