/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  WelcomeScreen: undefined;
  RegionListScreen: undefined;
  CustomerListScreen: { regionId?: string } | undefined;
  CustomerDetailsScreen: { customerId?: string } | undefined;
  EditCustomerScreen: { customerId?: string } | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
