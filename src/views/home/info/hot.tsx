import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import { HotProps } from './type';
export default function Hot(props: HotProps) {
  return (
    <View>
      <View style={styles.box}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 80, width: 100 }}></Image>
        <View style={styles.message}>
          <Text onPress={() => props.linkTo && props.linkTo(props)}>{props.title || ''}</Text>
          {/* <Text>薄如蝉翼，丝滑如肌肤</Text> */}
          <View style={styles.price}>
            {props.collectCount ? props.collectCount : <Text>￥{props.price || 0}</Text>}

            {/* <Text style={styles.btn}>4色可选</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 30,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  btn: {
    borderColor: '#fd994b',
    borderWidth: 1,
    padding: 2,
    marginLeft: 40,
    color: '#fd994b',
  },
});
