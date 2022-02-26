import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import { Button, ScrollView, Text } from '../components';
import { RootStackScreenProps } from '../types';

const UserDetailsScreen = ({ navigation, route }: RootStackScreenProps<'UserDetailsScreen'>) => {
  const customerId = route?.params?.userId || null;

  const customer = customerId
    ? useSelector((state: RootState) => state.customer.customers.find((x) => x.id === customerId))
    : null;

  const region = customer
    ? useSelector((state: RootState) => state.region.regions.find((x) => x.id === customer.region))
    : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {customer ? (
        <>
          <Text>First Name: {customer.firstName}</Text>
          <Text>Last Name: {customer.lastName}</Text>
          <Text>Region: {region ? region.name : ''}</Text>
          <Text>Status: {customer.isActive ? 'Active' : 'Inactive'}</Text>
          <Button mode="contained" onPress={() => navigation.navigate('EditUserScreen', { userId: customer.id })}>
            Edit User
          </Button>
        </>
      ) : (
        <Text>Customer not found!</Text>
      )}
    </ScrollView>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 30
  }
});
