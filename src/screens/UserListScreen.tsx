import { StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { Theme } from '../constants';
import { ScrollView } from '../components';
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

const UserListScreen = ({ navigation }: RootStackScreenProps<'UserListScreen'>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {USER_LIST.map((user, index) => (
        <TouchableHighlight
          key={`${user.id}-${index}`}
          underlayColor={Theme.colors.white}
          style={styles.touchable}
          onPress={() => navigation.navigate('UserDetailsScreen', { userId: user.id })}
        >
          <Card
            style={[
              styles.userCard,
              {
                backgroundColor: user.isActive ? Theme.colors.secondary : Theme.colors.darkGrey
              }
            ]}
          >
            <Card.Content>
              <Title style={styles.text}>{`${user.firstName} ${user.lastName}`}</Title>
              <Paragraph style={styles.text}>status: {user.isActive ? 'active' : 'inactive'}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableHighlight>
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
  touchable: {
    width: '80%',
    marginTop: 20,
    borderRadius: 15
  },
  userCard: {
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 15
  },
  text: {
    color: Theme.colors.white
  }
});
