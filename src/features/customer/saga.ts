import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setCustomers } from './actions';
import { getCustomers, saveCustomer } from './services';
import { GET_CUSTOMERS, SAVE_CUSTOMER, Customer, SaveCustomerAction } from './types';

function* handleGetCustomers() {
  try {
    const response: { data: Customer[] } = yield call(getCustomers);
    const { data } = response;
    yield put(setCustomers(data));
  } catch (error) {
    console.log(`Error in handleGetRegions: ${error}`);
    yield put(setCustomers([]));
  }
}

function* handleSaveCustomer(action: SaveCustomerAction) {
  try {
    const response: { data: Customer[] | null } = yield call(saveCustomer, action.payload);
    const { data } = response;
    if (data) {
      yield put(setCustomers(data));
    }
  } catch (error) {
    console.log(`Error in handleSaveCustomer: ${error}`);
  }
}

export function* watchCustomerRequests() {
  yield all([takeLatest(GET_CUSTOMERS, handleGetCustomers), takeLatest(SAVE_CUSTOMER, handleSaveCustomer)]);
}
