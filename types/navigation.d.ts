import type React from 'react';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useLinkTo } from '@react-navigation/native';

export type UseLinkToReturnType = ReturnType<typeof useLinkTo>;
export type HomeTabParamList = {
  Popular: undefined;
  Latest: undefined;
};
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  PostDetails: { id: string };
  Root: { id: string };
  NotFound: undefined;
  Login: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type NativeStackScreenItemProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
export type TabIconProps = { color: string; size: number; focused: boolean };
export type ScreenProps = {
  name: keyof RootStackParamList;
  component: React.ComponentType;
  option?: {
    headerShown?: boolean;
    tabBarIcon?: (props: TabIconProps) => Element;
  };
  interceptors?: any[];
};
export type BottomScreenProps = {
  name: string;
  component: React.ComponentType;
  option?: BottomTabNavigationOptions;
};
declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
