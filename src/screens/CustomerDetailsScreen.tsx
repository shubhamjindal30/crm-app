import { useEffect } from 'react';
import { StyleSheet, Button as DefaultButton } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { ScrollView, Text } from '../components';
import { RootStackScreenProps } from '../types';

const CustomerDetailsScreen = ({ navigation, route }: RootStackScreenProps<'CustomerDetailsScreen'>) => {
  const customerId = route?.params?.customerId || null;

  const customer = customerId
    ? useSelector((state: RootState) => state.customer.customers.find((x) => x.id === customerId))
    : null;

  const region = customer
    ? useSelector((state: RootState) => state.region.regions.find((x) => x.id === customer.region))
    : null;

  const handleSave = () => navigation.navigate('EditCustomerScreen', { customerId: customerId || '' });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DefaultButton title="Edit" onPress={handleSave} />
    });
  }, [handleSave]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {customer ? (
        <>
          <Text>First Name: {customer.firstName}</Text>
          <Text>Last Name: {customer.lastName}</Text>
          <Text>Region: {region ? region.name : ''}</Text>
          <Text>Status: {customer.isActive ? 'Active' : 'Inactive'}</Text>
        </>
      ) : (
        <Text>Customer not found!</Text>
      )}
    </ScrollView>
  );
};

export default CustomerDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 30
  }
});
