import { all, fork } from 'redux-saga/effects';

import { watchRegionRequests } from '../features/region/saga';

export function* watcherSaga() {
  yield all([fork(watchRegionRequests)]);
}
