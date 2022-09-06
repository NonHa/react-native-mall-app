import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import TipBox from './tipBox';
export default function Product() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TipBox style={styles.tipBox}></TipBox>
        <Text>WMF制造商</Text>
        <Text>9.9元起</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>
      </View>
      <View style={styles.box}>
        <Text>WMF制造商</Text>
        <Text>9.9元起</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>
      </View>
      <View style={styles.box}>
        <Text>WMF制造商</Text>
        <Text>9.9元起</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',

    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    padding: 10,
  },
  tipBox: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
});
