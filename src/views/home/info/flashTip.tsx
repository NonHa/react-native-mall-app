import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';

export default function FlashTip(props) {
  return (
    <View style={props.style}>
      <View style={styles.box}>
        <Text style={styles.tip}>￥299</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 45,
    width: 45,
    borderRadius: 22,
    backgroundColor: '#fb0017',
    zIndex: 999,
  },
  tip: {
    textAlign: 'center',
    lineHeight: 55,
    color: '#fff',
  },
});
