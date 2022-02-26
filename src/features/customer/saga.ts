import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { setCustomers } from './actions';
import { getCustomers, saveCustomer, deleteCustomers } from './services';
import { GET_CUSTOMERS, SAVE_CUSTOMER, DELETE_CUSTOMERS, Customer, SaveCustomerAction } from './types';

function* handleGetCustomers() {
  try {
    const response: { data: Customer[] } = yield call(getCustomers);
    const { data } = response;
    yield put(setCustomers(data));
  } catch (error) {
    console.log(`Error in handleGetCustomers: ${error}`);
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
    Alert.alert('Error', 'There was an error in saving the customer. Please try again.');
  }
}

function* handleDeleteCustomers() {
  try {
    const response: boolean = yield call(deleteCustomers);
    if (!response) throw new Error();
    yield put(setCustomers([]));
  } catch (error) {
    console.log(`Error in handleDeleteCustomers: ${error}`);
    Alert.alert('Error', 'There was an error in clearing the storage. Please try again.');
  }
}

export function* watchCustomerRequests() {
  yield all([
    takeLatest(GET_CUSTOMERS, handleGetCustomers),
    takeLatest(SAVE_CUSTOMER, handleSaveCustomer),
    takeLatest(DELETE_CUSTOMERS, handleDeleteCustomers)
  ]);
}
