import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import type { HeaderProps } from './type';
import { useNavigation } from '@react-navigation/native';

export default function Header(props: HeaderProps) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        justifyContent: 'space-between',
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome5 name="chevron-left" size={20}></FontAwesome5>
        <Text style={{ marginLeft: 10, fontSize: 25, color: '#000' }} onPress={() => props.close()}>
          {props.leftTitle || '23'}
        </Text>
      </View>
      <View>{props.rightRender && props.rightRender()}</View>
    </View>
  );
}
