export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const SAVE_CUSTOMER = 'SAVE_CUSTOMER';
export const SET_CUSTOMERS = 'SET_CUSTOMERS';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  region: string;
  isActive: boolean;
}

export interface GetCustomersAction {
  type: typeof GET_CUSTOMERS;
}

export interface SaveCustomerAction {
  type: typeof SAVE_CUSTOMER;
  payload: Customer;
}

export interface SetCustomersAction {
  type: typeof SET_CUSTOMERS;
  payload: Customer[];
}

export type CustomerActionType = GetCustomersAction | SaveCustomerAction | SetCustomersAction;
