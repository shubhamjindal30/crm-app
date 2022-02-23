import { StyleSheet } from 'react-native';

import { ScrollView, Text } from '../components';
import { RootStackScreenProps } from '../types';

const USER = {
  id: '1',
  firstName: 'User',
  lastName: `1`,
  region: {
    id: '1',
    name: 'North West'
  },
  isActive: true
};

const UserDetailsScreen = ({}: RootStackScreenProps<'UserDetailsScreen'>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>First Name: {USER.firstName}</Text>
      <Text>Last Name: {USER.lastName}</Text>
      <Text>Region: {USER.region.name}</Text>
      <Text>Status: {USER.isActive ? 'Active' : 'Inactive'}</Text>
    </ScrollView>
  );
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 30
  },
});
