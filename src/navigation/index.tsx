import React from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import StackNavs from './stackNavs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { navigationRef } from './intercept';
export default function Navigation() {
  const navigationRef = useNavigationContainerRef();
  navigationRef.addListener('state', (e) => {
    // console.log('e', e);
  });
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavs></StackNavs>
    </NavigationContainer>
  );
}
