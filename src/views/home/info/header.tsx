import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderProps } from './type';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
  },
  left: {},
  right: {},
  center: {},
  recommend: {
    flexDirection: 'row',
  },
});
export default class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  static defaultProps = {
    rightComponents: (
      <View style={styles.recommend}>
        <Text style={{ fontSize: 16, marginRight: 5 }}>更多推荐</Text>
        <Icon name="arrow-forward-circle-outline" size={20}></Icon>
      </View>
    ),
  };
  render(): React.ReactNode {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.left}>{this.props.leftComponents}</View>
        <View style={styles.center}>{this.props.centerComponents}</View>
        <View style={styles.right}>{this.props.rightComponents}</View>
      </View>
    );
  }
}
