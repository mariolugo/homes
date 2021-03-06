import { Record, Map } from 'immutable';

// Since we are using immutable, we are going to create the home record,
// used first on the initial state and then on the reuxers
const HomeData = Record({
  homes: new Map(),
  total: 0,
  currentPage: 0,
  totalPages: 0,
  // all the current homes in the current page
  currentHomes: new Map(),
  currentCount: 0,
  //array that will have all the current homes coordinates.
  markers: new Map(),
  fetching: true,
  fetchErrorMessage: '',
  fetchStatus: 200,
});

export default HomeData;
