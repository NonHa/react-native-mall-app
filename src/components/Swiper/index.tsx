import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';
import type { SwiperProps } from 'react-native-swiper';
import type { SwiperItem } from './type';
type MainSwiperProps = SwiperProps & {
  swiperItem: SwiperItem[];
};

export default class SwiperComponent extends Component<MainSwiperProps> {
  constructor(props: MainSwiperProps) {
    super(props);
  }
  render() {
    const swiperItem = this.props.swiperItem.map((v, index) => {
      return (
        <View key={index} style={v.style}>
          {v.component}
        </View>
      );
    });
    return <Swiper {...this.props}>{swiperItem}</Swiper>;
  }
}
