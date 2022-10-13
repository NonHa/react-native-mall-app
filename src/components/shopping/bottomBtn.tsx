import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CoverLayer from '../coverLayer';
import type { CarBottomBtnProps } from './type';
export default function ShoppingBottomBtn(props: CarBottomBtnProps) {
  return (
    <View style={styles.container}>
      {/* <CoverLayer show={true}></CoverLayer> */}
      <View style={styles.icons}>
        <View style={styles.iconView}>
          <FontAwesome5 name="headset" size={22}></FontAwesome5>
          <Text>客服</Text>
        </View>
        <View style={styles.iconView}>
          <FontAwesome name="shopping-cart" size={22}></FontAwesome>
          <Text>购物车</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: '#2ab795', paddingHorizontal: 20 }}>
          <Text
            style={{ lineHeight: 55, color: '#fff', fontSize: 20 }}
            onPress={() => props.JoinCar()}>
            加入购物车
          </Text>
        </View>
        <View style={{ backgroundColor: '#fd994b', paddingHorizontal: 20 }}>
          <Text style={{ lineHeight: 55, color: '#fff', fontSize: 20 }}>立即购买</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
});
