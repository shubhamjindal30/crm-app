import AsyncStorage from '@react-native-async-storage/async-storage';

import { Customer } from './types';

const getCustomers = async () => {
  try {
    const customersString = await AsyncStorage.getItem('customers');
    const customers: Customer[] = customersString ? JSON.parse(customersString) : [];
    return { data: customers };
  } catch (error) {
    console.log(`Error in saving customer`);
    return { data: [] };
  }
};

const saveCustomer = async (customer: Customer) => {
  try {
    const customersString = await AsyncStorage.getItem('customers');
    let customers: Customer[] = customersString ? JSON.parse(customersString) : [];
    let id;
    if (customer.id) {
      id = customer.id;
      customers = customers.filter((x) => x.id !== customer.id);
    } else {
      id = `${customers.length}`;
    }
    const customerObj = {
      ...customer,
      id
    };
    customers.push(customerObj);
    await AsyncStorage.setItem('customers', JSON.stringify(customers));
    return { data: customers };
  } catch (error) {
    console.log(`Error in saving customer`);
    return { data: null };
  }
};

export { getCustomers, saveCustomer };
