import React from 'react';
import { Text, View } from 'react-native';
import UserInfo from './info';
import UserCoup from './coup';
export default class Message extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <UserInfo></UserInfo>
        <UserCoup></UserCoup>
      </View>
    );
  }
}
