import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import Swiper from '@/components/Swiper';

import { getInfoById } from '@/api/product';
import Jump from '@/views/user/jump';
import Info from '@/views/home/info';
import New from '@/views/home/info/new';
import ShoppingBottomBtn from '@/components/shopping/bottomBtn';
export default function Introduce(props) {
  const params = props.route.params;
  const [productInfo, changeProductInfo] = useState<{
    name: string;
    subTitle: string;
    price: number;
    serviceIds: number[];
    description: string;
    comment: { name?: string };
    commentCount: number;
    recommendList: { name: string; subTitle?: string; price?: number; id: number }[];
    brandInfo: { id?: number; productCount: number; logo: string };
    brandName: string;
  }>({
    name: '',
    subTitle: '',
    price: 0,
    serviceIds: [],
    description: '',
    comment: {},
    commentCount: 0,
    recommendList: [],
    brandInfo: { productCount: 0, logo: '' },
    brandName: '',
  });
  useEffect(() => {
    getInfoById({ id: params.id }).then((res) => {
      // console.log('res', res);
      changeProductInfo(res.data);
    });
  }, []);
  const swiperItem = [];
  const jump1 = [
    {
      title: '服务说明',
    },
    {
      title: '商品参数',
    },
    {
      title: '选择规格',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
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
      <ShoppingBottomBtn></ShoppingBottomBtn>
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
