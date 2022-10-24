import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
          <View style={styles.item}>
            <Icon name="bookmark" size={30} color="#fc4024"></Icon>

            <Text>我的订单</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.item}>
          <Icon
            onPress={() => this.props.linkTo('/Order/Obligation')}
            name="newspaper-outline"
            size={30}
            color="#fc4024"></Icon>
          <Text>待付款</Text>
        </View>
        <View style={styles.item}>
          <Icon
            onPress={() => this.props.linkTo('/Order/confirm')}
            name="md-logo-dropbox"
            size={30}
            color="#fc4024"></Icon>

          <Text>待收货</Text>
        </View>
        <View style={styles.item}>
          <Icon
            onPress={() => this.props.linkTo('/Order/comment')}
            name="md-chatbox-ellipses-outline"
            size={30}
            color="#fc4024"></Icon>

          <Text>待评价</Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons name="sale" size={30} color="#fc4024"></MaterialCommunityIcons>

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
