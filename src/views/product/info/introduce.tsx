import React, { useEffect, useState, useRef } from 'react';
import type { Ref } from 'react';
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
import Swiper from '@/components/Swiper';

import { getInfoById } from '@/api/product';
import Jump from '@/views/user/jump';
import Info from '@/views/home/info';
import New from '@/views/home/info/new';
import ShoppingBottomBtn from '@/components/shopping/bottomBtn';
import { JumpProps } from '@/views/user/type';
import { ServiceType } from '@/enums/base';
import Icon from 'react-native-vector-icons/Ionicons';
import CoverLayer from '@/components/coverLayer';
import BuyModel from '@/components/shopping/buyModel';
import type { ModeRef } from '@/components/coverLayer/type';
import type { BuyModelProps } from '@/components/shopping/type';

export default function Introduce(props) {
  const params = props.route.params;
  const cover = useRef<ModeRef>(null);
  const [productInfo, changeProductInfo] = useState<
    {
      name: string;
      subTitle: string;
      price: number;
      serviceIds: string;
      description: string;
      comment: { name?: string };
      commentCount: number;
      recommendList: { name: string; subTitle?: string; price?: number; id: number }[];
      brandInfo: { id?: number; productCount: number; logo: string };
      brandName: string;
      skuList: { name: string }[];
      id: number;
    } & Omit<BuyModelProps, 'productId' | 'productName'>
  >({
    id: 0,
    name: '',
    subTitle: '',
    price: 0,
    serviceIds: '',
    description: '',
    comment: {},
    commentCount: 0,
    recommendList: [],
    brandInfo: { productCount: 0, logo: '' },
    brandName: '',
    attributeList: [],
    skuList: [],
  });
  const [modalVisible, changeModalVisible] = useState<boolean>(false);
  useEffect(() => {
    getInfoById({ id: params.id }).then((res) => {
      // console.log('res', res.data);
      changeProductInfo(res.data);
    });
  }, []);
  const swiperItem = [];
  const jump1: JumpProps[] = [
    {
      title: '服务说明',
      render: () => {
        const serviceIds: number[] =
          (productInfo.serviceIds && productInfo.serviceIds.split(',')) || [];
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Icon
                name={
                  serviceIds.includes(ServiceType.safe_return)
                    ? 'checkmark-circle'
                    : 'close-circle-sharp'
                }
                size={10}></Icon>
              <Text>无忧退货</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Icon
                name={
                  serviceIds.includes(ServiceType.quick_refund)
                    ? 'checkmark-circle'
                    : 'close-circle-sharp'
                }
                size={10}></Icon>
              <Text>快速退款</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Icon
                name={
                  serviceIds.includes(ServiceType.free_package_mail)
                    ? 'checkmark-circle'
                    : 'close-circle-sharp'
                }
                size={10}></Icon>
              <Text>免费包邮</Text>
            </View>
          </View>
        );
      },
    },
    {
      title: '商品参数',
      num: '查看',
      pressFun: () => {
        changeModalVisible(true);
      },
    },
    {
      title: '选择规格',
    },
  ];
  function pressCar() {
    if (cover.current) {
      cover.current.show();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <CoverLayer ref={cover}>
          <BuyModel
            productId={productInfo.id}
            productName={productInfo.name}
            {...productInfo}></BuyModel>
        </CoverLayer>
        <View>
          <View style={{ height: 300, backgroundColor: '#fff' }}>
            <Swiper swiperItem={swiperItem}></Swiper>
          </View>
          <View style={styles.nameAndTitle}>
            <Text style={{ fontSize: 20, color: '#000' }}>{productInfo.name}</Text>
            <Text style={{ fontSize: 18, color: '#ccc' }}>{productInfo.subTitle}</Text>
            <View>
              <Text style={{ fontSize: 18, color: '#ccc' }}>{productInfo.price}</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            {jump1.map((v, index) => {
              return <Jump key={index} {...v}></Jump>;
            })}
          </View>

          <Info
            header={{
              centerComponents: <Text style={{ color: '#000', fontSize: 20 }}>商品介绍</Text>,
              rightComponents: null,
            }}>
            <View style={{ padding: 20 }}>
              <Text>{productInfo.description}</Text>
            </View>
          </Info>
          <Info
            header={{
              centerComponents: <Text style={{ color: '#000', fontSize: 20 }}>商品评价</Text>,
              rightComponents: null,
            }}>
            <View style={{ padding: 20 }}>
              <Text>{productInfo?.commentCount || 0}</Text>
            </View>
          </Info>
          <Info
            header={{
              centerComponents: <Text style={{ color: '#000', fontSize: 20 }}>同类推荐</Text>,
              rightComponents: null,
            }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {productInfo.recommendList.map((v, index) => {
                return (
                  <View key={index} style={styles.container}>
                    <View style={styles.box}>
                      <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={{ height: 100, width: '100%' }}></Image>

                      <Text>{v.name}</Text>
                      <Text>{v.subTitle}</Text>
                      <Text>￥{v.price}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </Info>
          <Info
            header={{
              centerComponents: <Text style={{ color: '#000', fontSize: 20 }}>品牌信息</Text>,
              rightComponents: null,
            }}>
            <Jump
              render={() => {
                return (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={{ uri: productInfo.brandInfo.logo }}
                      style={{ height: 34, width: 34, borderRadius: 17 }}></Image>
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>{productInfo.brandName}</Text>
                  </View>
                );
              }}
              title={''}
              num={productInfo.brandInfo.productCount || 0}></Jump>
          </Info>
        </View>
      </ScrollView>
      <ShoppingBottomBtn JoinCar={pressCar}></ShoppingBottomBtn>
      {/* <CoverLayer show={modalVisible} renderContent={renderContent}></CoverLayer> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nameAndTitle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',

    flexWrap: 'wrap',
  },
  box: {
    padding: 30,
    alignItems: 'center',
  },
});
