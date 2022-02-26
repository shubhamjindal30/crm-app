import { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, Button as DefaultButton, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-native-paper';

import { Theme } from '../constants';
import { RootStackScreenProps } from '../types';
import { RootState } from '../store';
import { ScrollView, Input, View, Button, Text } from '../components';
import { saveCustomer } from '../features/customer/actions';

const EditCustomerScreen = ({ navigation, route }: RootStackScreenProps<'EditCustomerScreen'>) => {
  const dispatch = useDispatch();
  const customerId = route?.params?.customerId || null;

  const regions = useSelector((state: RootState) => state.region.regions);
  const customer = customerId
    ? useSelector((state: RootState) => state.customer.customers.find((x) => x.id === customerId))
    : null;

  const [firstName, setFirstName] = useState(customer ? customer.firstName : '');
  const [lastName, setLastName] = useState(customer ? customer.lastName : '');
  const [status, setStatus] = useState(customer ? customer.isActive : true);
  const [selectedRegion, setSelectedRegion] = useState(customer ? customer.region : '');

  const [fnamError, setFnameError] = useState('');
  const [lnamError, setLnameError] = useState('');

  const fnameRef = useRef<HTMLInputElement>();
  const lnameRef = useRef<HTMLInputElement>();

  const handleSave = () => {
    const fname = firstName.trim();
    const lname = lastName.trim();
    Keyboard.dismiss();

    if (!fname) {
      setFnameError('First name cannot be empty!');
      fnameRef.current?.focus();
      return;
    }

    if (!lname) {
      setLnameError('Last name cannot be empty!');
      lnameRef.current?.focus();
      return;
    }

    if (!selectedRegion) {
      Alert.alert('Please select a region!');
    }

    dispatch(
      saveCustomer({
        id: customerId || '',
        firstName: fname,
        lastName: lname,
        isActive: status,
        region: selectedRegion
      })
    );

    navigation.goBack();

  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DefaultButton title="Save" onPress={handleSave} />
    });
  }, [handleSave]);

  const handleFirstNameChange = (fname: string) => setFirstName(fname);
  const handleLastNameChange = (lname: string) => setLastName(lname);
  const handleStatusChange = () => setStatus(!status);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input
        ref={fnameRef}
        label="First Name"
        value={firstName}
        returnKeyType="next"
        autoCapitalize="words"
        autoFocus={!customerId ? true : false}
        autoComplete={false}
        onChange={() => setFnameError('')}
        onChangeText={handleFirstNameChange}
        errorMsg={fnamError}
        onSubmitEditing={() => lnameRef.current?.focus()}
      />
      <Input
        ref={lnameRef}
        label="Last Name"
        value={lastName}
        autoCapitalize="words"
        autoComplete={false}
        onChange={() => setLnameError('')}
        onChangeText={handleLastNameChange}
        errorMsg={lnamError}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <View style={styles.statusView}>
        <Text style={styles.headings}>Status</Text>
        <Switch color={Theme.colors.secondary} value={status} onValueChange={handleStatusChange} />
      </View>
      <Text style={[styles.headings, styles.regionHeadline]}>Select Region</Text>
      {regions && regions.map((region, index) => (
        <Button
          style={styles.regionBtn}
          key={`${region.id}-${index}`}
          mode="contained"
          color={selectedRegion === region.id ? Theme.colors.secondary : Theme.colors.darkGrey}
          onPress={() => setSelectedRegion(region.id)}
        >
          {region.name}
        </Button>
      ))}
    </ScrollView>
  );
};

export default EditCustomerScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 30,
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10
  },
  headings: {
    fontSize: 22,
    fontWeight: '500'
  },
  regionHeadline: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 20
  },
  regionBtn: {
    width: '70%',
    marginTop: 22
  }
});
