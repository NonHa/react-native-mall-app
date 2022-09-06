import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';

export default function TipBox(props) {
  return (
    <View style={props.style}>
      <View style={styles.box}>
        <Text style={styles.tip}>上新</Text>
        <View style={[styles.arrow, { transform: [{ rotate: '45deg' }] }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 50,
    backgroundColor: '#fd994b',
    zIndex: 999,
  },
  tip: {
    textAlign: 'center',
    lineHeight: 20,
    color: '#fff',
  },
  arrow: {
    position: 'absolute',
    width: 10,
    height: 10,
    bottom: -2,
    left: 2,
    backgroundColor: '#fd994b',
  },
});
