import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { navsConfig } from './navsConfig';
import { RootStackParamList, NativeStackScreenItemProps } from '/#/navigation';
import Login from '../views/login';
import { getToken, removeToken } from '../utils/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavs() {
  const navigation = useNavigation();
  async function logout() {
    await removeToken();

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {navsConfig.map(function (v, index) {
        return (
          <Stack.Screen
            key={index}
            name={v.name}
            component={v.component}
            options={v.option}></Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
//   headerLeft: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: 60,
//   },
//   headerLeftIcon: { flex: 1 },
// });
