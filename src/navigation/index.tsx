import React, { useEffect, useState } from 'react';

import { Text, View } from 'react-native';

import {
  NavigationContainer,
  useNavigationContainerRef,
  useNavigation,
  useLinkTo,
} from '@react-navigation/native';
import StackNavs from './stackNavs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { navigationRef } from './intercept';
import { getToken } from '@/utils/common';
import Login from '@/views/login';
export default function Navigation() {
  const navigationRef = useNavigationContainerRef();
  navigationRef.addListener('state', (e) => {});
  const _onReady = async () => {};
  const [token, changeToken] = useState(null);
  const [loading, changeLoading] = useState(false);
  const _onStateChange = () => {
    console.log('_onStateChange');
  };
  const linking = {
    config: {
      screens: {
        Root: '/Root',
      },
    },
  };
  useEffect(() => {
    const fn = async () => {
      const num = (await getToken()) as string;
      changeToken(num);
      changeLoading(true);
    };
    fn();
  }, []);
  if (!loading) {
    return null;
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => _onReady()}
      onStateChange={() => _onStateChange()}>
      <StackNavs token={token}></StackNavs>
    </NavigationContainer>
  );
}
