import type { ReactNode } from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type SwiperItem = {
  component: ReactNode;
  style: StyleProp<ViewStyle>;
};
