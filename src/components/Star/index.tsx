import { Text, View } from 'react-native';
import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import type { TextStyle } from 'react-native';

export default function Star(
  props: {
    showStarNum: number;
    selectStyle?: (index: number) => TextStyle;
    onSelectFun?: (index: number) => void;
  } = {
    showStarNum: 1,
  },
) {
  const renderIcons = () => {
    const icon = [];
    for (let i = 0; i < props.showStarNum; i++) {
      icon.push(
        <AntDesign
          name="star"
          style={[{ marginLeft: 3 }, props.selectStyle && props.selectStyle(i)]}
          size={20}
          onPress={() => props.onSelectFun && props.onSelectFun(i)}></AntDesign>,
      );
    }
    return icon;
  };
  return <View style={{ flexDirection: 'row' }}>{renderIcons()}</View>;
}
