import React from 'react';
import type { ModalBaseProps } from 'react-native';
export type CoverLayerProps = {
  children: React.ReactNode;
} & ModalBaseProps;

export type ModeRef = {
  show: () => void;
  hideModel: () => void;
};
