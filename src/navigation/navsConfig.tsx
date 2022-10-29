import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { StackNavigationOptions } from '@react-navigation/stack';
import type { ScreenProps, TabIconProps, BottomScreenProps } from '/#/navigation';

import BottomTabs from './BottomTabs';
import Home from '../views/home';
import User from '../views/user';

import Login from '../views/login';
import Register from '../views/login/register';

import Category from '../views/category';
import Subject from '../views/subject';
import UseDetail from '../views/user/message/detail';
import UseMessage from '../views/user/message/useMessage';
import LoginInterceptor from './intercept/LoginInterceptor';
import CollectInfo from '@/views/user/operate/collect/collectInfo';
import SubjectDetail from '@/views/subject/detail';
import WriteComment from '@/components/comment/write';
import ProductInfo from '@/views/product/info';
import Car from '@/components/shopping/car';
import SubmitOrder from '@/components/shopping/submitOrder';
import Address from '@/views/user/address';
import Order from '@/views/order';
import { removeToken } from '@/utils/common';
export const navsConfig: ScreenProps[] = [
  {
    name: 'Root',
    component: BottomTabs,
    option: ({ navigation, route }) => ({
      title: 'Mall',

      headerLeft: (props) => <Icon name="bell" size={24} onPress={() => removeToken()}></Icon>,
      headerRight: () => (
        <View style={styles.headerLeft}>
          <Icon style={styles.headerLeftIcon} name="search" size={24}></Icon>
          <Icon
            style={styles.headerLeftIcon}
            name="shopping-cart"
            size={24}
            onPress={() => navigation.push('Car')}></Icon>
        </View>
      ),
    }),
  },
  {
    name: 'Login',
    component: Login,
    interceptors: [
      {
        clazz: LoginInterceptor,
      },
    ],
    option: {
      headerShown: false,
    },
  },
  {
    name: 'Register',
    component: Register,
    option: {
      headerShown: false,
    },
  },
  {
    name: 'UseDetail',
    component: UseDetail,
    option: ({}) => ({
      title: '个人中心',
    }),
  },
  {
    name: 'UseMessage',
    component: UseMessage,
    option: ({}) => ({
      title: '个人信息',
    }),
  },
  {
    name: 'CollectInfo',
    component: CollectInfo,
    option: ({}) => ({
      title: '我的收藏',
    }),
  },
  {
    name: 'SubjectDetail',
    component: SubjectDetail,
    option: {
      title: '专题详情',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="coffee" color={props.color} size={props.size} />
      ),
    },
  },
  {
    name: 'WriteComment',
    component: WriteComment,
    option: {
      title: '填写评论',
    },
  },
  {
    name: 'ProductInfo',
    component: ProductInfo,
    option: {
      title: '商品信息',
    },
  },

  {
    name: 'Car',
    component: Car,
    option: {
      title: '购物车',
    },
  },
  // {
  //   name: 'SubmitOrder',
  //   component: SubmitOrder,
  //   option: {
  //     title: '提交订单',
  //   },
  // },
  {
    name: 'Order',
    component: Order,
    option: {
      title: '我的订单',
    },
  },
  {
    name: 'Address',
    component: Address,
    option: {
      title: '我的收货地址',
    },
  },
];

export const bottomNavs: BottomScreenProps[] = [
  {
    name: 'Home',
    component: Home,
    option: {
      title: '首页',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="home" color={props.color} size={props.size} />
      ),
    },
  },
  {
    name: 'Category',
    // component: Login,
    component: Category,
    option: {
      title: '分类',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <MaterialIcons name="category" color={props.color} size={props.size} />
      ),
    },
  },

  {
    name: 'Subject',
    component: Subject,
    option: {
      title: '专题',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="coffee" color={props.color} size={props.size} />
      ),
    },
  },
  {
    name: 'User',
    component: User,
    option: {
      title: '个人',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="user" color={props.color} size={props.size} />
      ),
    },
  },
];

const styles = StyleSheet.create({
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    width: 60,
  },
  headerLeftIcon: { flex: 1 },
});
