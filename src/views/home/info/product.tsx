import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import TipBox from './tipBox';
import { getBrand } from '../../../api/home';
export default function Product(props) {
  console.log('brandList', props.brandList);

  return (
    <View style={styles.container}>
      {props.brandList.map((v) => {
        return (
          <View style={styles.box}>
            <TipBox style={styles.tipBox}></TipBox>
            <Text>{v.name}制造商</Text>
            <Text>{v.productCount}元起</Text>
            <Image source={{ uri: v.bigPic }} style={{ height: 100, width: '100%' }}></Image>
          </View>
        );
      })}
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
