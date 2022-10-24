import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  SafeAreaView,
  Image,
  RefreshControl,
} from 'react-native';
import { getOrderList, payOrder, confirmOrder } from '@/api/order';
import type { OrderItem, OrderCommentRef } from './type';
import CoverLayer from '@/components/coverLayer';
import { ModeRef } from '@/components/coverLayer/type';
import OrderComment from './comment';
import BasePage from '@/components/BasePage';
import { addComment } from '@/api/product';
export default function ShowItem(props) {
  const params = props.route.params;

  const cover = useRef<ModeRef>(null);
  const commentRef = useRef<OrderCommentRef>(null);

  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [orderItem, setOrderItem] = useState<OrderItem>({});
  useEffect(() => {
    getOrder();
  }, [params]);
  function getOrder() {
    const param = { ...params, page: 1, pageSize: 5 };
    // console.log('param', param);
    setRefreshing(true);
    getOrderList(param).then((res) => {
      // console.log('res==>', res.data.list.length);
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
      setRefreshing(false);

      setOrderList(list);
    });
  }
  function showModel(item: OrderItem) {
    setOrderItem(item);
    if (cover.current) {
      cover.current.show();
    }
  }
  function _onSubmit() {
    if (params.status === 0) {
      payOrder({
        orderId: orderItem?.orderSn,
        orderItemIds: orderItem?.productList.map((v) => v.id),
      }).then((res) => {
        getOrder();
        if (res.code === 200) {
          cover.current?.hideModel();
        }
        // console.log('orderItem', res);
      });
    } else if (params.status === 2) {
      confirmOrder({
        orderItemIds: orderItem?.productList.map((v) => v.id),
      }).then((res) => {
        getOrder();
        if (res.code === 200) {
          cover.current?.hideModel();
        }
        // console.log('orderItem', res);
      });
    }
  }
  function commentSubmit() {
    console.log('commentRef', commentRef.current);
    const comment = commentRef.current;
    addComment({
      star: comment?.selectStar as number,
      content: comment?.inputText as string,
      productId: orderItem.productList[0].id,
      productName: orderItem.productList[0].name,
    }).then((res) => {
      if (res.code === 200) {
        cover.current?.hideModel();
      }
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingHorizontal: 10, backgroundColor: '#ccc', flex: 1 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => getOrder()}></RefreshControl>
        }>
        {orderList.map((v, index) => {
          return (
            <View
              key={index}
              style={{ backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, padding: 10 }}>
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
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View></View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Text style={styles.btn}>删除订单</Text>
                  <Text style={[styles.btn]} onPress={() => showModel(v)}>
                    {params.status === 0
                      ? '继续付款'
                      : params.status === 2
                      ? '确认收货'
                      : params.status === 3
                      ? '评价'
                      : '查看物流'}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <CoverLayer
        ref={cover}
        touchableStyle={{
          justifyContent: 'flex-start',
          backgroundColor: params.status === 3 ? '#fff' : 'rgba(0,0,0,0.4)',
        }}>
        {params.status === 3 ? (
          <BasePage
            headerProps={{
              leftTitle: '发表评价',
              rightRender: () => {
                return <Text onPress={() => commentSubmit()}>发布</Text>;
              },
              close: () => cover.current?.hideModel(),
            }}>
            <OrderComment ref={commentRef} {...orderItem}></OrderComment>
          </BasePage>
        ) : (
          <View style={styles.oprateModel}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: '#000', fontSize: 20 }}>确定订单？</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTopWidth: 1,
                  borderTopColor: '#ccc',
                }}>
                <Text
                  style={{ textAlign: 'center', flex: 1, padding: 10 }}
                  onPress={() => cover.current?.hideModel()}>
                  取消
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    flex: 1,
                    padding: 10,
                    borderLeftWidth: 1,
                    borderLeftColor: '#ccc',
                  }}
                  onPress={() => _onSubmit()}>
                  确认
                </Text>
              </View>
            </View>
          </View>
        )}
      </CoverLayer>
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
  btn: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    marginLeft: 10,
    borderColor: '#ccc',
  },
  oprateModel: {
    position: 'absolute',
    top: '30%',
    padding: 20,
    width: '100%',
  },
});
