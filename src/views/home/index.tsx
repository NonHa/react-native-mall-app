import React from 'react';
import { Text, View } from 'react-native';
import Swiper from '../../components/Swiper';
export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <Swiper></Swiper>
      </View>
    );
  }
}
