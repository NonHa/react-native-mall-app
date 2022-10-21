import React from 'react';

export type HeaderProps = {
  leftTitle: string | number;
  close: () => void;
  rightRender?: () => React.ReactNode;
};

export type BasePageProps = {
  headerProps: HeaderProps;
  children: React.ReactNode;
};
