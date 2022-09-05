import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { bottomNavs } from './navsConfig';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      })}>
      {bottomNavs.map((v, index) => {
        return (
          <Tab.Screen
            key={index}
            name={v.name}
            component={v.component}
            options={v.option}></Tab.Screen>
        );
      })}
    </Tab.Navigator>
  );
}
