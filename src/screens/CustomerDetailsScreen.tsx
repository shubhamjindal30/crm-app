import { useEffect } from 'react';
import { StyleSheet, Button as DefaultButton } from 'react-native';
import { useSelector } from 'react-redux';
import { Card, Title } from 'react-native-paper';

import { RootState } from '../store';
import { ScrollView, Text, View } from '../components';
import { RootStackScreenProps } from '../types';
import { Theme } from '../constants';

interface FieldProps {
  title: string;
  value: string;
}

const TitleWithStyles: React.FunctionComponent = ({ children }) => <Title style={styles.text}>{children}</Title>;

const Field: React.FunctionComponent<FieldProps> = ({ title, value }) => (
  <View style={styles.fieldView}>
    <TitleWithStyles>{title}:</TitleWithStyles>
    <TitleWithStyles>{value}</TitleWithStyles>
  </View>
);

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
        <Card style={styles.customerCard}>
          <Card.Content>
            <Field title="First Name" value={customer.firstName} />
            <Field title="Last Name" value={customer.lastName} />
            <Field title="Region" value={region ? region.name : ''} />
            <Field title="Status" value={customer.isActive ? 'Active' : 'Inactive'} />
          </Card.Content>
        </Card>
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
  },
  customerCard: {
    width: '80%',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    backgroundColor: Theme.colors.secondary
  },
  fieldView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  text: {
    color: Theme.colors.white
  }
});
