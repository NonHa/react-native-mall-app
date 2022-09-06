import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import TipBox from './tipBox';
export default function New() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TipBox style={styles.tipBox}></TipBox>

        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>

        <Text>银色星芒刺绣网纱底裤</Text>
        <Text>薄如蝉翼，丝滑如肌肤</Text>
        <Text>￥99</Text>
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
    padding: 30,
    alignItems: 'center',
  },
  tipBox: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
