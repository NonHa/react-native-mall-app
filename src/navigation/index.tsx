import React from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavs from './stackNavs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavs></StackNavs>
    </NavigationContainer>
  );
}
