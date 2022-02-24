import { useRef, useState } from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';

import { Theme } from '../constants';
import { RootStackScreenProps } from '../types';
import { ScrollView, Input, View, Button, Text } from '../components';

const REGION_LIST = [
  {
    id: '1',
    name: 'North West'
  },
  {
    id: '2',
    name: 'Mid West'
  },
  {
    id: '3',
    name: 'North East'
  },
  {
    id: '4',
    name: 'South East'
  },
  {
    id: '5',
    name: 'South West'
  }
];

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

const EditUserScreen = ({}: RootStackScreenProps<'EditUserScreen'>) => {
  const [firstName, setFirstName] = useState(USER.firstName);
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState(USER.isActive);
  const [selectedRegion, setSelectedRegion] = useState(USER.region.id);

  const [fnamError, setFnameError] = useState('');
  const [lnamError, setLnameError] = useState('');

  const fnameRef = useRef<HTMLInputElement>();
  const lnameRef = useRef<HTMLInputElement>();

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
      {REGION_LIST.map((region, index) => (
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

export default EditUserScreen;

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
