import {
  GET_CUSTOMERS,
  SAVE_CUSTOMER,
  SET_CUSTOMERS,
  DELETE_CUSTOMERS,
  Customer,
  GetCustomersAction,
  SaveCustomerAction,
  SetCustomersAction,
  DeleteCustomersAction
} from './types';

export const getCustomers = (): GetCustomersAction => ({ type: GET_CUSTOMERS });
export const saveCustomer = (customer: Customer): SaveCustomerAction => ({ type: SAVE_CUSTOMER, payload: customer });
export const setCustomers = (customers: Customer[]): SetCustomersAction => ({
  type: SET_CUSTOMERS,
  payload: customers
});
export const deleteCustomers = (): DeleteCustomersAction => ({ type: DELETE_CUSTOMERS });
