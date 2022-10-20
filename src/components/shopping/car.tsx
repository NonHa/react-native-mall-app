import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Radio from '../radio';
import { getCarList, generateOrder } from '@/api/car';
import { useNavigation } from '@react-navigation/native';

export default function Car({ navigation }) {
  const [allCheck, changeAllCheck] = useState({});
  const [total, changeTotal] = useState(0);
  const [cartIds, changeCartIds] = useState<number[]>([]);
  const [carList, changeCarList] = useState<
    {
      id: number;
      productBrand: string;
      productList: {
        id: number;
        productName: string;
        productPic: string;
        price: number;
        quantity: number;
      }[];
    }[]
  >([]);
  useEffect(() => {
    const keys = {};
    getCarList().then((res) => {
      res.data.forEach((v, index) => {
        keys[index] = null;
        v.productList.forEach((k) => {
          keys[k.id] = null;
        });
      });
      changeAllCheck(keys);
      changeCarList(res.data);
    });
  }, []);
  useEffect(() => {
    let total = 0;
    carList.forEach((v) => {
      v.productList.forEach((k) => {
        if (allCheck[k.id]) {
          cartIds.push(allCheck[k.id]);
          total += k.price * k.quantity;
        }
      });
    });
    changeTotal(total);
    console.log('allCheck', allCheck);
  }, [allCheck]);
  function changeSelect(val, index) {
    const { productList } = carList[index];
    const item = {};
    if (val !== null) {
      productList.forEach((v) => {
        item[v.id] = v.id;
      });
      changeAllCheck({
        ...allCheck,
        ...item,
        [index]: val,
      });
    } else {
      productList.forEach((v) => {
        item[v.id] = null;
      });
      changeAllCheck({
        ...allCheck,
        ...item,
        [index]: val,
      });
    }
  }

  function submit() {
    navigation.push('SubmitOrder', {
      cartIds,
    });
    // generateOrder({ cartIds }).then((res) => {});
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {carList.map((v, index) => {
          return (
            <View
              key={v.id}
              style={{
                backgroundColor: '#fff',
                margin: 10,
                borderRadius: 10,
                padding: 10,
                marginBottom: 0,
              }}>
              <View style={styles.brandHeader}>
                <View style={{ width: 30 }}>
                  <Radio
                    value={allCheck[index]}
                    label={index}
                    onChange={(val) => changeSelect(val, index)}></Radio>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                    marginLeft: 10,
                  }}>
                  <View>
                    <Text style={{ fontSize: 20, color: '#000' }}>{v.productBrand}</Text>
                  </View>
                  <Text>23</Text>
                </View>
              </View>
              {v.productList.map((k) => {
                return (
                  <View style={styles.prodcutItem} key={`${k.id}`}>
                    <View style={{ width: 30 }}>
                      <Radio
                        value={allCheck[k.id]}
                        label={k.id}
                        onChange={(val) =>
                          changeAllCheck({
                            ...allCheck,
                            [k.id]: val,
                          })
                        }></Radio>
                    </View>
                    <View style={styles.productInfo}>
                      <Image
                        source={{
                          uri: k.productPic,
                        }}
                        style={{ height: 100, width: 80, marginLeft: 10 }}></Image>
                      <View style={{ marginLeft: 10, justifyContent: 'space-between', flex: 1 }}>
                        <View>
                          <Text style={{ fontSize: 16, color: '#000' }}>{k.productName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 20, color: '#e69774' }}>￥{k.price}</Text>
                          <Text style={{ color: '#ccc' }}>x{k.quantity}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}>
        <View style={{ width: 30, flexDirection: 'row', alignItems: 'center' }}>
          <Radio value={allCheck} label={1} onChange={(val) => change(val)}></Radio>
          <Text>全选</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text>合计：</Text>
            <Text>￥</Text>
            <Text style={{ marginRight: 5, fontSize: 25 }}>{total}</Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              paddingVertical: 5,
              paddingHorizontal: 30,
              backgroundColor: 'red',
              borderRadius: 30,
              color: '#fff',
            }}
            onPress={() => submit()}>
            结算
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  brandHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  prodcutItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfo: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
  },
});
