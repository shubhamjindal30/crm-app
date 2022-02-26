/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';

import {
  EditCustomerScreen,
  NotFoundScreen,
  RegionListScreen,
  CustomerDetailsScreen,
  CustomerListScreen,
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
      <Stack.Screen name="CustomerListScreen" component={CustomerListScreen} options={{ headerShown: true, title: 'Customers' }} />
      <Stack.Screen
        name="CustomerDetailsScreen"
        component={CustomerDetailsScreen}
        options={{ headerShown: true, title: 'Customer Details' }}
      />
      <Stack.Screen
        name="EditCustomerScreen"
        component={EditCustomerScreen}
        options={{ headerShown: true, title: '' }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

export default Navigation;
