import React from 'react';

import { View, StyleSheet } from 'react-native';
import Header from './header';
import { InfoProps } from './type';
import Bottom from './bottom';
export default function Info(props: InfoProps) {
  return (
    <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
      <Header {...props.header}></Header>
      {props.children}
      {props.showBottom ? <Bottom></Bottom> : null}
    </View>
  );
}
