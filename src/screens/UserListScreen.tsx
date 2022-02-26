import { StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Theme } from '../constants';
import { ScrollView, Text } from '../components';
import { RootStackScreenProps } from '../types';
import { RootState } from '../store';

const UserListScreen = ({ navigation, route }: RootStackScreenProps<'UserListScreen'>) => {
  const regionId = route?.params?.regionId || null;
  const users = useSelector((state: RootState) => {
    if (regionId) return state.customer.customers.filter((x) => x.region === regionId);
    else return state.customer.customers;
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {users && users.length > 0 ? (
        users.map((user, index) => (
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
        ))
      ) : (
        <Text>No customers in this region.</Text>
      )}
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
