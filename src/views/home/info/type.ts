import React from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type HeaderProps = {
  leftComponents: any;
  rightComponents?: any;
  centerComponents?: any;
  style?: StyleProp<ViewStyle>;
};

export type InfoProps = {
  header: HeaderProps;
  children?: React.ReactNode;
  showBottom?: boolean;
  bottom?: object;
  style?: StyleProp<ViewStyle>;
};

export interface ProductState {
  brandList: { name: string; id: number; productCount: number; bigPic: string }[];
  advertiseList: any[];
  refreshing: boolean;
}

export type HotProps = {
  img: string;
  title: string;
  id: number;
  price?: number;
  collectCount?: React.ReactNode;
  linkTo?: (props: HotProps) => void;
};
