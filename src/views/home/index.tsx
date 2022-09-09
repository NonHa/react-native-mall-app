import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Swiper from '../../components/Swiper';
import Tabs from './tabs';
import Tip from './tip';
import Info from './info';
import Product from './info/product';
import Flash from './info/flash';
import New from './info/new';
import Hot from './info/hot';
import Subject from './info/subject';
import Love from './info/love';

import { getHome, getBrand } from '../../api/home';
import type { SwiperItem } from '../../components/Swiper/type';

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const slides: SwiperItem[] = [
  {
    component: <Text style={styles.text}>Hello Swiper</Text>,
    style: styles.slide1,
  },
  {
    style: styles.slide1,
    component: <Text style={styles.text}>Hello Swiper2</Text>,
  },
  {
    style: styles.slide1,
    component: <Text style={styles.text}>Hello Swiper3</Text>,
  },
];
export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      brandList: [],
    };
  }
  componentDidMount() {
    getBrand({ page: 1, pageSize: 5 }).then((res) => {
      console.log('res==>brand', res);
      this.setState({
        brandList: res.data.list,
      });
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Swiper swiperItem={slides}></Swiper>
        </View>
        <Tabs></Tabs>
        <Tip></Tip>
        <Info
          header={{
            leftComponents: <Text style={{ fontSize: 18 }}>品牌制造商直供</Text>,
          }}>
          <Product brandList={this.state.brandList}></Product>
        </Info>
        <Info
          header={{
            leftComponents: <Text style={{ fontSize: 18 }}>秒杀专区</Text>,
          }}>
          <Flash></Flash>
        </Info>
        <Info
          header={{
            leftComponents: <Text style={{ fontSize: 18 }}>新鲜好物</Text>,
          }}>
          <New></New>
        </Info>
        <Info
          header={{
            leftComponents: <Text style={{ fontSize: 18 }}>人气推荐</Text>,
          }}>
          <Hot></Hot>
        </Info>
        <Info
          header={{
            leftComponents: <Text style={{ fontSize: 18 }}>专题精选</Text>,
          }}>
          <Subject></Subject>
        </Info>
        <Info
          header={{
            leftComponents: null,
            rightComponents: null,
            centerComponents: <Text style={{ fontSize: 18 }}>猜你喜欢</Text>,
          }}>
          <Love></Love>
        </Info>
      </ScrollView>
    );
  }
}
