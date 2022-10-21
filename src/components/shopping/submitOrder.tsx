import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { ProductList } from './type';
import { confirmOrder } from '@/api/car';
import { AddressModel } from '@/views/user/address/type';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SubmitOrder(props: { cartIds: number[] }) {
  const [defaultAddress, changeDefaultAddress] = useState<AddressModel>({});
  const [productList, changeProductList] = useState<
    {
      brand: string;
      product: {
        productName: string;
        productId: number;
        price: number;
        quantity: number;
        discription: string;
        productPic: string;
      }[];
    }[]
  >([]);

  function getAddressList() {
    confirmOrder({ cartIds: props.cartIds || [] }).then((res) => {
      console.log('res.data', props.cartIds);
      const { memberReceiveAddressList, cartPromotionItemList } = res.data;
      if (memberReceiveAddressList && memberReceiveAddressList.length > 0) {
        const defaultItem = memberReceiveAddressList.filter((v) => v.defaultStatus === 1);
        if (defaultItem && defaultItem.length > 0) {
          changeDefaultAddress(defaultItem[0]);
        }
      }
      const productGroupByBrand = [];
      cartPromotionItemList.forEach((item) => {
        if (!productGroupByBrand.includes(item.productBrand)) {
          productGroupByBrand.push(item.productBrand);
        }
      });
      changeProductList(
        productGroupByBrand.map((v) => {
          return {
            brand: v,
            product: cartPromotionItemList
              .filter((k) => k.productBrand === v)
              .map((o) => {
                return {
                  ...o,
                  discription: JSON.parse(o.productAttr)
                    .map((p) => `${p.key}:${p.value}`)
                    .join(' '),
                };
              }),
          };
        }),
      );
    });
  }
  useEffect(() => {
    getAddressList();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 10, backgroundColor: '#ccc', flex: 1 }}>
        <View style={styles.address}>
          <View style={{ padding: 5, borderRadius: 20, backgroundColor: 'red', marginRight: 10 }}>
            <Icon name="location-sharp" color={'#fff'}></Icon>
          </View>

          <View style={{ flex: 1, overflow: 'hidden' }}>
            <Text style={{ fontSize: 20, color: '#000' }}>{defaultAddress.detailAddress}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text>{defaultAddress.name}</Text>
              <Text style={{ marginLeft: 10 }}>{defaultAddress.phoneNumber}</Text>
            </View>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color="#ccc"
            style={{ marginLeft: 10 }}></MaterialIcons>
        </View>
        {productList.map((v, index) => {
          return (
            <View
              key={index}
              style={{ backgroundColor: '#fff', borderRadius: 10, marginTop: 10, padding: 10 }}>
              <View>
                <Text style={{ fontSize: 20, color: '#000' }}>{v.brand}</Text>
              </View>
              <View>
                {v.product.map((k) => {
                  return (
                    <View key={k.productId} style={styles.product}>
                      <View>
                        <Image
                          source={{ uri: k.productPic }}
                          style={{ height: 100, width: 80 }}></Image>
                      </View>
                      <View style={{ flex: 1, paddingLeft: 10 }}>
                        <View style={[styles.detail]}>
                          <Text style={{ fontSize: 15, color: '#000' }}>{k.productName}</Text>
                          <Text style={{ fontSize: 15, color: '#000' }}>￥{k.price}</Text>
                        </View>
                        <View
                          style={[
                            styles.detail,
                            {
                              marginTop: 5,
                            },
                          ]}>
                          <Text>{k.discription}</Text>
                          <Text>x{k.quantity}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View>
        <Text>343</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  address: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
