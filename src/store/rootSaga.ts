import { all, fork } from 'redux-saga/effects';

import { watchRegionRequests } from '../features/region/saga';
import { watchCustomerRequests } from '../features/customer/saga';

export function* watcherSaga() {
  yield all([fork(watchRegionRequests), fork(watchCustomerRequests)]);
}
