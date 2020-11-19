import { Record, Map } from 'immutable';

const HomeData = Record({
  homes: new Map(),
  total: 0,
  page: 0,
  fetching: true,
  fetchErrorMessage: '',
  fetchStatus: 200,
});

export default HomeData;
