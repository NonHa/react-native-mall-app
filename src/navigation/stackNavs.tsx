import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { navsConfig } from './navsConfig';
import { RootStackParamList, NativeStackScreenItemProps } from '/#/navigation';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavs() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
