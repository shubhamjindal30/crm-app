import { StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Theme } from '../constants';
import { ScrollView, Text } from '../components';
import { RootStackScreenProps } from '../types';
import { RootState } from '../store';

const CustomerListScreen = ({ navigation, route }: RootStackScreenProps<'CustomerListScreen'>) => {
  const regionId = route?.params?.regionId || null;
  const customers = useSelector((state: RootState) => {
    if (regionId) return state.customer.customers.filter((x) => x.region === regionId);
    else return state.customer.customers;
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {customers && customers.length > 0 ? (
        customers.map((customer, index) => (
          <TouchableHighlight
            key={`${customer.id}-${index}`}
            underlayColor={Theme.colors.white}
            style={styles.touchable}
            onPress={() => navigation.navigate('CustomerDetailsScreen', { customerId: customer.id })}
          >
            <Card
              style={[
                styles.customerCard,
                {
                  backgroundColor: customer.isActive ? Theme.colors.secondary : Theme.colors.darkGrey
                }
              ]}
            >
              <Card.Content>
                <Title style={styles.text}>{`${customer.firstName} ${customer.lastName}`}</Title>
                <Paragraph style={styles.text}>status: {customer.isActive ? 'active' : 'inactive'}</Paragraph>
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

export default CustomerListScreen;

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
  customerCard: {
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 15
  },
  text: {
    color: Theme.colors.white
  }
});
