import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from './header';
import { BasePageProps } from './type';
export default function BasePage(props: BasePageProps) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header {...props.headerProps}></Header>
      {props.children}
    </View>
  );
}
