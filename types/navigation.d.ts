import type React from 'react';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps, StackNavigationOptions } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { useLinkTo } from '@react-navigation/native';

export type UseLinkToReturnType = ReturnType<typeof useLinkTo>;

export type HomeTabParamList = {
  Home: undefined;
  Category: undefined;
  Subject: undefined;
  User: undefined;
};
export type CollectTabParamList = {
  product: {
    collectType: number;
  };
  subject: {
    collectType: number;
  };
  detail: {
    collectType: number;
  };
};
export type OrderTabParamList = {
  All: undefined;
  Obligation: {
    status: number;
  };
  Pending: {
    status: number;
  };
  confirm: {
    status: number;
  };
  comment: {
    status: number;
  };
};
export type ProductInfoTabParamList = {
  introduce: {
    collectType: number;
    id: number;
  };
  detail: {
    collectType: number;
    id: number;
  };
  evaluate: {
    collectType: number;
    id: number;
  };
  subject: {
    collectType: number;
    id: number;
  };
};
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  UseDetail: {
    info: {
      username: string;
    };
  };
  UseMessage: undefined;
  CollectInfo: NavigatorScreenParams<CollectTabParamList>;
  SubjectDetail: {
    id: number;
  };
  WriteComment: {
    refresh: () => void;
    id: number;
  };
  ProductInfo: NavigatorScreenParams<ProductInfoTabParamList> & {
    id: number;
  };
  Car: undefined;
  SubmitOrder: undefined;
  Order: NavigatorScreenParams<OrderTabParamList>;
  Address: undefined;
  Root: NavigatorScreenParams<HomeTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;
export type CollectTabScreenProps<T extends keyof CollectTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<CollectTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;
export type ProductInfoTabScreenProps<T extends keyof ProductInfoTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<ProductInfoTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type OrderTabScreenProps<T extends keyof OrderTabParamList> = CompositeScreenProps<
  MaterialTopTabScreenProps<OrderTabParamList, T>,
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
  option?: StackNavigationOptions;
  interceptors?: any[];
};
export type BottomScreenProps = {
  name: string;
  component: React.ComponentType;
  option?: BottomTabNavigationOptions;
};
declare global {
  namespace ReactNavigation {
    // type RootParamList = RootStackParamList;
  }
}
