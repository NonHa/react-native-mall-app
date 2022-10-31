import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { bottomNavs } from './navsConfig';
import { useAppDispatch } from '../app/hooks';
import { setUserInfo } from '../store/features/user/infoSlice';

const Tab = createBottomTabNavigator();
console.log(343);

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
