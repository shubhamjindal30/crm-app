import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Theme } from '../constants';
import { View, Button } from '../components';
import { RootStackScreenProps } from '../types';
import { getRegions } from '../features/region/actions';
import { RootState } from '../store';

const RegionListScreen = ({ navigation }: RootStackScreenProps<'RegionListScreen'>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  const regions = useSelector((state: RootState) => state.region.regions);

  return (
    <View style={styles.container}>
      {regions.map((region, index) => (
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
