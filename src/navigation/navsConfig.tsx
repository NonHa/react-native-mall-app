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
      title: '????????????',
    }),
  },
  {
    name: 'UseMessage',
    component: UseMessage,
    option: ({}) => ({
      title: '????????????',
    }),
  },
  {
    name: 'CollectInfo',
    component: CollectInfo,
    option: ({}) => ({
      title: '????????????',
    }),
  },
  {
    name: 'SubjectDetail',
    component: SubjectDetail,
    option: {
      title: '????????????',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="coffee" color={props.color} size={props.size} />
      ),
    },
  },
  {
    name: 'WriteComment',
    component: WriteComment,
    option: {
      title: '????????????',
    },
  },
  {
    name: 'ProductInfo',
    component: ProductInfo,
    option: {
      title: '????????????',
    },
  },

  {
    name: 'Car',
    component: Car,
    option: {
      title: '?????????',
    },
  },
  // {
  //   name: 'SubmitOrder',
  //   component: SubmitOrder,
  //   option: {
  //     title: '????????????',
  //   },
  // },
  {
    name: 'Order',
    component: Order,
    option: {
      title: '????????????',
    },
  },
  {
    name: 'Address',
    component: Address,
    option: {
      title: '??????????????????',
    },
  },
];

export const bottomNavs: BottomScreenProps[] = [
  {
    name: 'Home',
    component: Home,
    option: {
      title: '??????',
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
      title: '??????',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <MaterialIcons name="category" color={props.color} size={props.size} />
      ),
    },
  },

  {
    name: 'Subject',
    component: Subject,
    option: {
      title: '??????',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="coffee" color={props.color} size={props.size} />
      ),
    },
  },
  {
    name: 'User',
    component: User,
    option: {
      title: '??????',
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
