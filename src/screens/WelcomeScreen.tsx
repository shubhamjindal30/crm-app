import { StyleSheet } from 'react-native';

import { Text, View, Button } from '../components';
import { RootStackScreenProps } from '../types';

const WelcomeScreen = ({ navigation }: RootStackScreenProps<'WelcomeScreen'>) => {
  const handleContinue = () => {
    navigation.navigate('RegionListScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CRM plus</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button mode="contained" onPress={handleContinue} >
        Continue
      </Button>
    </View>
  );
}

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
  }
});
