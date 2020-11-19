import { Record, Map } from 'immutable';

const HomeData = Record({
  homes: new Map(),
  fetching: true,
  fetchErrorMessage: '',
  fetchStatus: 200,
});

export default HomeData;
