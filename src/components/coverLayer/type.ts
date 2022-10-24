import React from 'react';
import type { ModalBaseProps, ViewStyle } from 'react-native';
export type CoverLayerProps = {
  children: React.ReactNode;
  touchableStyle?: ViewStyle;
} & ModalBaseProps;

export type ModeRef = {
  show: () => void;
  hideModel: () => void;
};
