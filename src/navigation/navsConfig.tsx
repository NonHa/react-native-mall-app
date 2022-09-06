import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import type { StackNavigationOptions } from '@react-navigation/stack';
import type { ScreenProps, TabIconProps, BottomScreenProps } from '/#/navigation';

import BottomTabs from './BottomTabs';
import Home from '../views/home';
import User from '../views/user';
import Category from '../views/category';
import Subject from '../views/subject';
export const navsConfig: ScreenProps[] = [
  {
    name: 'Root',
    component: BottomTabs,
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
