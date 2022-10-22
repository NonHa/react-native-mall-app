import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal, SafeAreaView, Image } from 'react-native';
import { getOrderList } from '@/api/order';
import type { OrderItem } from './type';
export default function ShowItem() {
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  useEffect(() => {
    getOrderList({ page: 1, pageSize: 5, status: 0 }).then((res) => {
      // console.log('res==>', res.data.list[0].orderItemList);
      const list: OrderItem[] = [];

      res.data.list.forEach((v) => {
        v.orderItemList.forEach((k) => {
          k.discription = JSON.parse(k.productAttr)
            .map((p) => `${p.key}:${p.value}`)
            .join(' ');
          const index = list.findIndex(
            (h) => h.productBrand === k.productBrand && h.orderSn === k.orderSn,
          );
          if (index === -1) {
            list.push({
              orderSn: k.orderSn,
              productBrand: k.productBrand,
              productList: [k],
            });
          } else {
            list[index].productList.push(k);
          }
        });
      });
      list.forEach((v) => {
        v.totalPrice = 0;
        v.productList.forEach((k) => {
          v.totalPrice += k.productPrice * k.productQuantity;
        });
      });
      setOrderList(list);
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 10, backgroundColor: '#ccc', flex: 1 }}>
        {orderList.map((v, index) => {
          return (
            <View
              key={index}
              style={{ backgroundColor: '#fff', borderRadius: 10, marginTop: 10, padding: 10 }}>
              <View>
                <Text style={{ fontSize: 20, color: '#000' }}>{v.productBrand}</Text>
              </View>
              <View>
                {v.productList.map((k) => {
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
                          <Text style={{ fontSize: 15, color: '#000' }}>￥{k.productPrice}</Text>
                        </View>
                        <View
                          style={[
                            styles.detail,
                            {
                              marginTop: 5,
                            },
                          ]}>
                          <Text>{k.discription}</Text>
                          <Text>x{k.productQuantity}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View></View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#ccc', fontSize: 17 }}>含运费服务需支付 </Text>
                  <Text style={{ color: '#000', fontSize: 17 }}>需付款￥{v.totalPrice}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
