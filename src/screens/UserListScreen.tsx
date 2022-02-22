import { StyleSheet } from 'react-native';

import { Theme } from '../constants';
import { ScrollView, Button } from '../components';
import { RootStackScreenProps } from '../types';

const USER_LIST = Array.from({ length: 20 }, (_, i) => {
  const userNumber = i + 1;
  return {
    id: `${userNumber}`,
    firstName: 'User',
    lastName: `${userNumber}`,
    isActive: userNumber % 3 !== 0
  };
});

const UserListScreen = ({}: RootStackScreenProps<'UserListScreen'>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {USER_LIST.map((user, index) => (
        <Button
          style={styles.userBtn}
          key={`${user.id}-${index}`}
          mode="contained"
          color={user.isActive ? Theme.colors.secondary : Theme.colors.darkGrey}
          onPress={() => {}}
        >
          {user.firstName} {user.lastName}
        </Button>
      ))}
    </ScrollView>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 30
  },
  userBtn: {
    width: '80%',
    marginTop: 20
  }
});
