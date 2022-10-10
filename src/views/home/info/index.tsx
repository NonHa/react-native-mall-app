import React from 'react';

import { View, StyleSheet } from 'react-native';
import Header from './header';
import { InfoProps } from './type';
import Bottom from './bottom';
export default function Info(props: InfoProps) {
  console.log('props', props.header);

  return (
    <View
      style={props.style ? props.style : { backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
      <Header {...props.header} style={props.header.style}></Header>
      {props.children}
      {props.showBottom ? <Bottom {...props.bottom}></Bottom> : null}
    </View>
  );
}
