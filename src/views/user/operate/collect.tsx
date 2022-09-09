import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Collect extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>我的订单</Text>
          <Text>我的收藏</Text>
        </View>
        <View style={styles.item}>
          <Text>100</Text>
          <Text>商品</Text>
        </View>
        <View style={styles.item}>
          <Text>100</Text>
          <Text>专题</Text>
        </View>
        <View style={styles.item}>
          <Text>100</Text>
          <Text>话题</Text>
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
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
