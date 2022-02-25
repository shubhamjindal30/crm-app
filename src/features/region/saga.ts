import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setRegions } from './actions';
import { getRegions } from './services';
import { GET_REGIONS, Region } from './types';

function* handleGetRegions() {
  try {
    const response: { data: Region[] } = yield call(getRegions);
    const { data } = response;
    yield put(setRegions(data));
  } catch (error) {
    console.log(`Error in handleGetRegions: ${error}`);
  }
}

export function* watchRegionRequests() {
  yield all([takeLatest(GET_REGIONS, handleGetRegions)]);
}
