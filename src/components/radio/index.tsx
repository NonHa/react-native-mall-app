import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { RadioProps } from './type';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Radio(props: RadioProps) {
  const check = props.value === props.label;
  return (
    <TouchableHighlight
      onPress={() => props.onChange(check ? null : props.label)}
      underlayColor="none">
      <View style={styles.container}>
        <Text style={{ marginRight: 5 }}>{props.children}</Text>
        {check ? (
          <Icon
            name={props.activeIcon || 'checkmark-circle'}
            size={25}
            color={props.activeColor || '#4F8EF7'}></Icon>
        ) : (
          <Icon
            name={props.cancelIcon || 'checkmark-circle-outline'}
            size={25}
            color={props.cancelColor || '#4F8EF7'}></Icon>
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: 50,
  },
});
