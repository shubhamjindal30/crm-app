import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { Text, View, Button } from '../components';
import { RootStackScreenProps } from '../types';
import { deleteCustomers, getCustomers } from '../features/customer/actions';
import { getRegions } from '../features/region/actions';

const WelcomeScreen = ({ navigation }: RootStackScreenProps<'WelcomeScreen'>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getCustomers());
  }, []);

  const handleContinue = () => {
    navigation.navigate('RegionListScreen');
  };

  const handleClearStorage = async () => dispatch(deleteCustomers());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CRM Plus</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button mode="contained" onPress={handleContinue}>
        Continue
      </Button>
      <Button style={styles.clearBtn} mode="contained" onPress={handleClearStorage}>
        Clear Storage
      </Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  clearBtn: {
    marginTop: 30
  }
});
