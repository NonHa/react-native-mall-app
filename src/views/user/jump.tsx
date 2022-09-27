import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { useLinkTo } from '@react-navigation/native';
import PropTypes from 'prop-types';
type JumpProps = {
  render?: () => React.ReactNode;
  pressFun?: () => void;
  goPath?: string;
  jumpPressOnrender?: string;
  rightIcon?: string;
  hideArrow?: boolean;
  title: string;
  num?: number;
  rightBoxStyle?: ViewStyle | TextStyle;
};
export default function Jump(props: JumpProps) {
  const info = useAppSelector((state) => state.infoSlice.info);
  const infoKey = props.infoKey;
  const detail = info.detail || {};
  const linkTo = useLinkTo();
  function _press() {
    if (props.goPath) {
      // console.log('goPath', props.goPath);
      linkTo(props.goPath);
    }
    if (props.jumpPressOnrender) {
      props.render && props.render();
    }
    if (props.pressFun) {
      props.pressFun();
    }
  }
  return (
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => _press()}>
      <View style={styles.container}>
        <View style={[styles.item]}>
          {props.rightIcon ? <Icon name={props.rightIcon} size={25}></Icon> : null}
          <Text style={[{ marginLeft: 8, fontSize: 20 }, props.rightBoxStyle]}>{props.title}</Text>
          {props.render && props.render()}
        </View>
        <View style={styles.item}>
          <Text style={{ marginRight: 8, fontSize: 20 }}>
            {infoKey ? detail[infoKey] || info[infoKey] : props.num}
          </Text>
          {props.hideArrow ? null : <Icon name="arrow-forward" size={25}></Icon>}
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
