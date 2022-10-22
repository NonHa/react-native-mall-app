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
import { ProductList, OrderItem } from './type';
import { confirmOrder } from '@/api/car';
import { AddressModel } from '@/views/user/address/type';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { generateOrder } from '@/api/car';
import Address from '@/views/user/address';
import BasePage from '../BasePage';

export default function SubmitOrder(props: { cartIds: number[] }) {
  const [defaultAddress, changeDefaultAddress] = useState<AddressModel>({});
  const [total, changeTotal] = useState<number>(0);
  const [productList, changeProductList] = useState<OrderItem[]>([]);
  const [modalVisible, changeModalVisible] = useState<boolean>(false);
  const [isOprate, changeIsOprate] = useState<boolean>(false);

  function getAddressList() {
    confirmOrder({ cartIds: props.cartIds || [] }).then((res) => {
      const { memberReceiveAddressList, cartPromotionItemList } = res.data;
      if (memberReceiveAddressList && memberReceiveAddressList.length > 0) {
        const defaultItem = memberReceiveAddressList.filter((v) => v.defaultStatus === 1);
        if (defaultItem && defaultItem.length > 0) {
          changeDefaultAddress(defaultItem[0]);
        }
      }
      const productGroupByBrand: string[] = [];
      let total = 0;
      cartPromotionItemList.forEach((item) => {
        total += item.price || 0;
        if (!productGroupByBrand.includes(item.productBrand)) {
          productGroupByBrand.push(item.productBrand);
        }
      });
      changeTotal(total);
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
  function _onSubmit() {
    generateOrder({ cartIds: props.cartIds, memberReceiveAddressId: defaultAddress.id }).then(
      (res) => {},
    );
  }
  const addressHeaderRender = () => {
    return <Text onPress={() => changeIsOprate(!isOprate)}>{isOprate ? '完成' : '管理'}</Text>;
  };
  function selectItemFun(item: AddressModel) {
    changeDefaultAddress(item);
    changeModalVisible(false);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 10, backgroundColor: '#ccc', flex: 1 }}>
        <TouchableHighlight onPress={() => changeModalVisible(true)} underlayColor="none">
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
        </TouchableHighlight>

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View></View>
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
            onPress={() => _onSubmit()}>
            提交订单
          </Text>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          changeModalVisible(!modalVisible);
        }}>
        <BasePage
          headerProps={{
            leftTitle: '添加收货地址',
            close: () => changeModalVisible(false),
            rightRender: addressHeaderRender,
          }}>
          <Address isOprate={isOprate} selectItem selectItemFun={selectItemFun}></Address>
        </BasePage>
      </Modal>
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
