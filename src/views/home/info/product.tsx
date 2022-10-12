import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import TipBox from './tipBox';
import { getBrand } from '../../../api/home';
import { ProductProps } from './type';
export default function Product(props: ProductProps) {
  return (
    <View style={styles.container}>
      {props.brandList
        ? props.brandList.map((v) => {
            return (
              <View key={v.id} style={styles.box}>
                <TipBox style={styles.tipBox}></TipBox>
                <Text>{v.name}制造商</Text>
                <Text>{v.productCount}元起</Text>
                <Image source={{ uri: v.bigPic }} style={{ height: 100, width: '100%' }}></Image>
              </View>
            );
          })
        : null}
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
