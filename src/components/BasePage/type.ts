import React from 'react';

export type HeaderProps = {
  leftTitle: string | number;
  close: () => void;
};

export type BasePageProps = {
  headerProps: HeaderProps;
  children: React.ReactNode;
};
