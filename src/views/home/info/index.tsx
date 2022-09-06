import React from 'react';

import { View, StyleSheet } from 'react-native';
import Header from './header';
import { InfoProps } from './type';
export default function Product(props: InfoProps) {
  return (
    <View style={{ backgroundColor: '#fff', padding: 10, marginTop: 10 }}>
      <Header {...props.header}></Header>
      {props.children}
    </View>
  );
}
