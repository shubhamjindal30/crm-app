import { StyleSheet } from 'react-native';

import { Theme } from '../constants';
import { View, Button } from '../components';
import { RootStackScreenProps } from '../types';

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

const RegionListScreen = ({ navigation }: RootStackScreenProps<'RegionListScreen'>) => {
  return (
    <View style={styles.container}>
      {REGION_LIST.map((region, index) => (
        <Button
          style={styles.regionBtn}
          key={`${region.id}-${index}`}
          mode="contained"
          color={Theme.colors.secondary}
          onPress={() =>
            navigation.navigate('UserListScreen', {
              regionId: region.id
            })
          }
        >
          {region.name}
        </Button>
      ))}
      <Button mode="contained" onPress={() => {}}>
        Create User
      </Button>
    </View>
  );
};

export default RegionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  regionBtn: {
    width: '80%'
  }
});
