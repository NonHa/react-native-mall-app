import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';

export default function Subject(props) {
  console.log('props', props.pic);

  return (
    <View style={styles.box}>
      <Image
        source={{
          uri: props.pic,
        }}
        style={{ height: 120, width: '100%' }}></Image>
      <View style={styles.message}>
        <View>
          <Text>{props.subjectName}</Text>
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
