import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import FlashTip from './flashTip';
export default function Flash() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FlashTip style={styles.tipBox}></FlashTip>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>
        <Text>秒杀价￥99</Text>
        <Text>银色星芒刺绣网纱底裤</Text>
        <Text>薄如蝉翼，丝滑如肌肤</Text>
      </View>
      <View style={styles.box}>
        <FlashTip style={styles.tipBox}></FlashTip>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 100, width: '100%' }}></Image>
        <Text>秒杀价￥99</Text>
        <Text>银色星芒刺绣网纱底裤</Text>
        <Text>薄如蝉翼，丝滑如肌肤</Text>
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
    paddingTop: 50,
    alignItems: 'center',
  },
  tipBox: {
    position: 'absolute',
    top: 15,
    right: 0,
  },
});
