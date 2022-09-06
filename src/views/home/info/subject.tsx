import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';

export default function Subject() {
  return (
    <View style={styles.box}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ height: 120, width: '100%' }}></Image>
      <View style={styles.message}>
        <View>
          <Text>五个春天的生活新提案</Text>
          <Text>餐厨起居好物</Text>
        </View>
        <View>
          <Text>￥99起</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  message: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
