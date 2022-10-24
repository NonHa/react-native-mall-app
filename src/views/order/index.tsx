import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShowItem from './showItem';
import { OrderStatus, OrderConfirmStatus } from '@/enums/base';
export default function Order() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
        },
        lazy: true,
      }}>
      <Tab.Screen
        name="All"
        initialParams={{}}
        component={ShowItem}
        options={{ tabBarLabel: '全部' }}
      />
      <Tab.Screen
        name="Obligation"
        initialParams={{ status: OrderStatus.obligation }}
        component={ShowItem}
        options={{ tabBarLabel: '待付款' }}
      />
      <Tab.Screen
        name="Pending"
        initialParams={{ status: OrderStatus.pending }}
        component={ShowItem}
        options={{ tabBarLabel: '待发货' }}
      />
      <Tab.Screen
        name="confirm"
        initialParams={{ status: OrderStatus.waitreceive }}
        component={ShowItem}
        options={{ tabBarLabel: '待收货' }}
      />
      <Tab.Screen
        name="comment"
        initialParams={{ status: OrderStatus.waitConment }}
        component={ShowItem}
        options={{ tabBarLabel: '待评价' }}
      />
    </Tab.Navigator>
  );
}
