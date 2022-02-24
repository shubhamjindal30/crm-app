/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import {
  EditUserScreen,
  ModalScreen,
  NotFoundScreen,
  RegionListScreen,
  UserDetailsScreen,
  UserListScreen,
  WelcomeScreen
} from '../screens';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegionListScreen"
        component={RegionListScreen}
        options={{ headerShown: true, title: 'Regions' }}
      />
      <Stack.Screen name="UserListScreen" component={UserListScreen} options={{ headerShown: true, title: 'Users' }} />
      <Stack.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        options={{ headerShown: true, title: 'User Details' }}
      />
      <Stack.Screen
        name="EditUserScreen"
        component={EditUserScreen}
        options={{ headerShown: true, title: '' }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
