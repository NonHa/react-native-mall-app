import React from 'react';
import { Text, View } from 'react-native';
import ClickTabs from './clickTabs';
import Collect from './collect';
export default class Oprate extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <ClickTabs></ClickTabs>
        <Collect></Collect>
      </View>
    );
  }
}
