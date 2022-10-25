import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CollectMessage from './messages';
import type { CollectTabParamList } from '#/navigation';
export default function CollectInfo() {
  const Tab = createMaterialTopTabNavigator<CollectTabParamList>();
  return (
    <Tab.Navigator
      initialRouteName="product"
      screenOptions={{
        lazy: true,
      }}>
      <Tab.Screen
        name="product"
        initialParams={{ collectType: 1 }}
        component={CollectMessage}
        options={{ tabBarLabel: '商品' }}
      />
      <Tab.Screen
        name="subject"
        initialParams={{ collectType: 2 }}
        component={CollectMessage}
        options={{ tabBarLabel: '专题' }}
      />
      <Tab.Screen
        name="detail"
        initialParams={{ collectType: 3 }}
        component={CollectMessage}
        options={{ tabBarLabel: '话题' }}
      />
    </Tab.Navigator>
  );
}
