import React from 'react';
import { Text, View } from 'react-native';

import UserInfo from './info';
import UserCoup from './coup';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getInfo } from '../../../store/features/user/infoSlice';

export default function Message() {
  return (
    <View>
      <UserInfo></UserInfo>
      <UserCoup></UserCoup>
    </View>
  );
}
