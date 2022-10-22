import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import type { UseLinkToReturnType } from '#/navigation';

export default class ClickTabs extends React.Component<{ linkTo: UseLinkToReturnType }> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.item}
          onPress={() => this.props.linkTo('/Order')}
          underlayColor="none">
          <View>
            <Text>我的订单</Text>
            <Text>我的订单</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.item}>
          <Text>优惠券</Text>
          <Text>待付款</Text>
        </View>
        <View style={styles.item}>
          <Text>关注</Text>
          <Text>待收货</Text>
        </View>
        <View style={styles.item}>
          <Text>关注</Text>
          <Text>待评价</Text>
        </View>
        <View style={styles.item}>
          <Text>关注</Text>
          <Text>售后服务</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
