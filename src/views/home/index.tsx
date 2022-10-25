import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
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

import { getHome, getBrand, getAdvertise } from '../../api/home';
import type { SwiperItem } from '../../components/Swiper/type';
import { ProductState } from './info/type';
import { HomeTabScreenProps } from '#/navigation';
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

export default class Home extends React.Component<HomeTabScreenProps<'Home'>, ProductState> {
  constructor(props: HomeTabScreenProps<'Home'>) {
    super(props);

    this.state = {
      brandList: [],
      advertiseList: [],
      refreshing: false,
    };
    this.getAdvertiseList = this.getAdvertiseList.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }
  componentDidMount() {
    getBrand({ page: 1, pageSize: 5 }).then((res) => {
      this.setState({
        brandList: res.data.list,
      });
    });
    this.getAdvertiseList();
  }
  getAdvertiseList() {
    getAdvertise({ page: 1, pageSize: 5 }).then((res) => {
      this.setState({
        advertiseList: res.data.list.map((v): SwiperItem => {
          return {
            component: (
              <Image source={{ uri: v.pic }} style={{ width: '100%', height: 200 }}></Image>
            ),
            style: styles.slide1,
          };
        }),
        refreshing: false,
      });
    });
  }
  onRefresh() {
    this.setState({
      refreshing: true,
    });

    this.getAdvertiseList();
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }>
          <View style={styles.container}>
            <Swiper swiperItem={this.state.advertiseList}></Swiper>
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
      </SafeAreaView>
    );
  }
}
