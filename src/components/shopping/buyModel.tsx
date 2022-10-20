import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import type { BuyModelProps } from './type';
import LinearGradinet from 'react-native-linear-gradient';
import { isArray } from '@/utils/is';
import { addProductToCar } from '@/api/product';
export default function BuyModel(props: BuyModelProps) {
  const [selectObj, changeSelectObj] = useState({});
  const [buyNum, changeBuyNum] = useState(0);
  const [total, changeTotal] = useState(0);
  const [price, changePrice] = useState(props.price);
  const [productSku, changeProductSku] = useState<{
    productSkuId: number;
    productSkuCode: number;
    productAttr: string;
  }>({ productSkuId: 0, productSkuCode: 0, productAttr: '' });

  useEffect(() => {
    props.skuList.forEach((v) => {
      v.spData = isArray(v.spData) ? v.spData : JSON.parse(v.spData);
      v.selectType = v.spData.map((v) => v.value).join('-');
      console.log('props', v);
    });

    props.attributeList.forEach((v, index) => {
      v.inputList.split(',').length > 0 &&
        v.inputList.split(',').forEach((k) => {
          changeSelectObj({
            ...selectObj,
            [index]: null,
          });
        });
    });
  }, []);
  useEffect(() => {
    changeTotal(buyNum * price);
  }, [buyNum]);
  function selectFun(index: number, str: string) {
    changeSelectObj({
      ...selectObj,
      [index]: str,
    });
  }
  useEffect(() => {
    const str = Object.values(selectObj).join('-');
    changePrice(props.price);

    props.skuList.forEach((v) => {
      if (v.selectType === str) {
        changeProductSku({
          productSkuId: v.id,
          productSkuCode: v.skuCode,
          productAttr: JSON.stringify(v.spData),
        });
        changePrice(v.price);
      }
    });
  }, [selectObj]);
  function changeNum(type) {
    if (type === 'des') {
      if (buyNum === 0) return;
      changeBuyNum(buyNum - 1);
    } else {
      changeBuyNum(buyNum + 1);
    }
  }
  function submit() {
    addProductToCar({
      ...props,
      price: price,
      quantity: buyNum,
      ...productSku,
      productBrand: props.brandName,
    }).then((res) => {});
  }
  return (
    <TouchableHighlight
      style={{
        backgroundColor: '#fff',
        height: 700,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
      }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <Text style={{ color: '#ed4a06' }}>￥</Text>
              <Text style={{ color: '#ed4a06', fontSize: 30 }}>{price}</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ed4a06',
                marginLeft: 5,
                borderRadius: 50,
                flexDirection: 'row',
                paddingVertical: 3,
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  lineHeight: 20,
                }}>
                实付价￥
              </Text>
              <Text
                style={{
                  color: '#fff',
                  lineHeight: 30,
                  fontSize: 26,
                }}>
                {price}
              </Text>
            </View>
          </View>
          <Icon name={'close-sharp'} size={25}></Icon>
        </View>
        <ScrollView
          style={{ flex: 1, backgroundColor: '#ebebeb', padding: 10 }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.main}>
            {props.attributeList.map((v, index) => {
              return (
                <View key={v.id} style={{ marginTop: 10 }}>
                  <View style={styles.tipTitle}>
                    <Text style={{ fontSize: 18 }}>{v.name}</Text>
                  </View>
                  <View style={styles.detail}>
                    {v.inputList.split(',').length > 0 &&
                      v.inputList.split(',').map((k) => {
                        return (
                          <View key={k} style={{ alignSelf: 'flex-start' }}>
                            <Text
                              style={[
                                styles.inputItem,
                                selectObj[index] === k ? styles.selectInputItem : null,
                              ]}
                              onPress={() => selectFun(index, k)}>
                              {k}
                            </Text>
                          </View>
                        );
                      })}
                  </View>
                </View>
              );
            })}
            <View style={styles.count}>
              <Text style={{ fontSize: 18 }}>数量</Text>
              <View style={styles.inputNumBox}>
                <Text
                  style={[styles.inputIcon, { borderRightWidth: 1 }]}
                  onPress={() => changeNum('des')}>
                  {' '}
                  -{' '}
                </Text>
                <Text
                  style={{
                    width: 50,
                    textAlign: 'center',
                  }}>
                  {buyNum}
                </Text>
                <Text
                  style={[styles.inputIcon, { borderLeftWidth: 1 }]}
                  onPress={() => changeNum('add')}>
                  {' '}
                  +{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ borderTopWidth: 2, borderTopColor: '#e1e1e1' }}>
          <View style={styles.totalMoney}>
            <View style={styles.subTotal}>
              <Text style={{ fontSize: 20, color: '#050505' }}>小计￥{total}，</Text>
              <Text style={{ fontSize: 20, color: '#e26f32', marginLeft: 0 }}>共减</Text>
            </View>
            <View>
              <Text style={{ color: '#e26f32' }}>明细</Text>
            </View>
          </View>
          <View style={{ height: 40, paddingHorizontal: 10, marginBottom: 10 }}>
            <LinearGradinet
              colors={['#f77306', '#f80931']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}>
              <Text
                style={{ textAlign: 'center', color: '#fff', lineHeight: 55, fontSize: 17 }}
                onPress={() => submit()}>
                立即支付
              </Text>
            </LinearGradinet>
          </View>
        </View>
      </SafeAreaView>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  main: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputNumBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    alignItems: 'center',
  },
  inputIcon: {
    fontSize: 20,
    borderColor: '#ccc',
  },
  tipTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000',
  },
  detail: {
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  inputItem: {
    padding: 5,
    width: 'auto',
    backgroundColor: '#ebebeb',
    borderRadius: 4,
    marginLeft: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  selectInputItem: {
    color: '#e69774',
    backgroundColor: '#f5efef',
    borderColor: '#e3a989',
    borderWidth: 1,
    padding: 4,
  },
  totalMoney: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  subTotal: {
    flexDirection: 'row',
  },
  submit: {
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ccc',
  },
});
