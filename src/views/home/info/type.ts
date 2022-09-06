import React from 'react';
export type HeaderProps = {
  leftComponents: any;
  rightComponents?: any;
  centerComponents?: any;
};

export type InfoProps = {
  header: HeaderProps;
  children?: React.ReactNode;
};
