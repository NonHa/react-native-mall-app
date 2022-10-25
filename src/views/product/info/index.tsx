import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Introduce from './introduce';
import Detail from './detail';
import Evaluate from './evaluate';
import Subject from './subject';
import { ProductInfoTabParamList, RootStackScreenProps } from '#/navigation';

export default function ProductInfo(props: RootStackScreenProps<'ProductInfo'>) {
  const params = props.route.params;
  const Tab = createMaterialTopTabNavigator<ProductInfoTabParamList>();
  return (
    <Tab.Navigator
      initialRouteName="introduce"
      screenOptions={{
        lazy: true,
      }}>
      <Tab.Screen
        name="introduce"
        initialParams={{ collectType: 1, id: params.id }}
        component={Introduce}
        options={{ tabBarLabel: '商品介绍' }}
      />
      <Tab.Screen
        name="detail"
        initialParams={{ collectType: 2, id: params.id }}
        component={Detail}
        options={{ tabBarLabel: '图文详情' }}
      />
      <Tab.Screen
        name="evaluate"
        initialParams={{ collectType: 3, id: params.id }}
        component={Evaluate}
        options={{ tabBarLabel: '商品评价' }}
      />
      <Tab.Screen
        name="subject"
        initialParams={{ collectType: 4, id: params.id }}
        component={Subject}
        options={{ tabBarLabel: '相关专题' }}
      />
    </Tab.Navigator>
  );
}
