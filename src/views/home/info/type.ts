import React from 'react';
export type HeaderProps = {
  leftComponents: any;
  rightComponents?: any;
  centerComponents?: any;
};

export type InfoProps = {
  header: HeaderProps;
  children?: React.ReactNode;
  showBottom?: boolean;
  bottom?: object;
};

export interface ProductState {
  brandList: { name: string; id: number; productCount: number; bigPic: string }[];
  advertiseList: any[];
  refreshing: boolean;
}
