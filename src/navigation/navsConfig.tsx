import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { StackNavigationOptions } from '@react-navigation/stack';
import type { ScreenProps, TabIconProps, BottomScreenProps } from '/#/navigation';

import BottomTabs from './BottomTabs';
import Home from '../views/Home';
import Test from '../views/test';
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
    name: 'PostDetails',
    component: Test,
    option: {
      title: '个人',
      tabBarIcon: (props: TabIconProps): React.ReactNode => (
        <Icon name="user" color={props.color} size={props.size} />
      ),
    },
  },
];
