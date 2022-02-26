import { CustomerActionType, SET_CUSTOMERS, Customer } from './types';

interface CustomerState {
  customers: Customer[];
};

const initialState: CustomerState = {
  customers: []
};

export default (state = initialState, action: CustomerActionType): CustomerState => {
  switch (action.type) {
    case SET_CUSTOMERS:
      const { payload } = action;
      return {
        ...state,
        customers: payload
      };
    default:
      return state;
  }
};
