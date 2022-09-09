import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class UserCoup extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>积分</Text>
          <Text>100</Text>
        </View>
        <View style={styles.item}>
          <Text>优惠券</Text>
          <Text>100</Text>
        </View>
        <View style={styles.item}>
          <Text>关注</Text>
          <Text>100</Text>
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
