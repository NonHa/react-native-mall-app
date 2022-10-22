import React from 'react';
import { Text, View } from 'react-native';
import ClickTabs from './clickTabs';
import Collect from './collect/collect';
import { useLinkTo } from '@react-navigation/native';

export default function Oprate() {
  const linkTo = useLinkTo();

  return (
    <View>
      <ClickTabs linkTo={linkTo}></ClickTabs>
      <Collect linkTo={linkTo}></Collect>
    </View>
  );
}
