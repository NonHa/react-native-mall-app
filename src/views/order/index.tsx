import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShowItem from './showItem';
export default function Order() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="product"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
        },
        lazy: true,
      }}>
      <Tab.Screen
        name="product"
        initialParams={{ collectType: 0 }}
        component={ShowItem}
        options={{ tabBarLabel: '全部' }}
      />
      <Tab.Screen
        name="product2"
        initialParams={{ collectType: 1 }}
        component={ShowItem}
        options={{ tabBarLabel: '待付款' }}
      />
      <Tab.Screen
        name="subject3"
        initialParams={{ collectType: 2 }}
        component={ShowItem}
        options={{ tabBarLabel: '待发货' }}
      />
      <Tab.Screen
        name="subject5"
        initialParams={{ collectType: 4 }}
        component={ShowItem}
        options={{ tabBarLabel: '待收货' }}
      />
      <Tab.Screen
        name="detail4"
        initialParams={{ collectType: 3 }}
        component={ShowItem}
        options={{ tabBarLabel: '待评价' }}
      />
    </Tab.Navigator>
  );
}
