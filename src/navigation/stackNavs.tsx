import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navsConfig } from './navsConfig';
import { RootStackParamList } from '#/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavs(props) {
  console.log('props==>', props);

  return (
    <Stack.Navigator
      initialRouteName={props.token ? 'Root' : 'Login'}
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
