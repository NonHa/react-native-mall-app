import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import { recommendSubjectDetail } from '@/api/subject';
import Swiper from '@/components/Swiper';
import type { SwiperItem } from '@/components/Swiper/type';
export default function SubjectDetail(props) {
  const params = props.route.params;
  // console.log('params', params)
  const [subjectItem, changeSubjectItem] = useState<{
    pic: string;
    title: string;
    categoryName: string;
    createTime: string;
    content: string;
    productList: any[];
  }>({ productList: [] });
  const [swiperItem, changeSwiperItem] = useState<SwiperItem[]>([]);
  useEffect(() => {
    recommendSubjectDetail({ id: params.id }).then((res) => {
      console.log('res', res.data.productList);
      changeSubjectItem(res.data);
      changeSwiperItem([
        {
          component: (
            <Image source={{ uri: subjectItem.pic }} style={{ width: '100%', height: 200 }}></Image>
          ),
          style: {},
        },
      ]);
    });
  }, []);

  return (
    <ScrollView>
      <View style={{ height: 200 }}>
        <Swiper swiperItem={swiperItem}></Swiper>
      </View>
      <View style={styles.describe}>
        <Text style={{ fontSize: 30 }}>{subjectItem.title}</Text>
        <View style={styles.contentHead}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: subjectItem.pic }}
              style={{ width: 40, height: 40, borderRadius: 20 }}></Image>
            <Text style={{ marginLeft: 10 }}>{subjectItem.categoryName}</Text>
          </View>
          <Text>{subjectItem.createTime}</Text>
        </View>
        <View>
          <Text>{subjectItem.content}</Text>
        </View>
      </View>
      <View>
        <Text>相关单品</Text>
        {subjectItem.productList.map((v, index) => {
          return (
            <View key={index}>
              <Text>{v.name}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  describe: {
    padding: 20,
  },
  contentHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  product: {},
});
