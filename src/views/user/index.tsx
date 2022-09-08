import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Message from './message';
import Oprate from './operate';
import Jump from './jump';
export default class User extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      jump1: [
        {
          rightIcon: 'browsers',
          title: '我的足迹',
          num: 10,
        },
        {
          rightIcon: 'book-sharp',
          title: '我的评价',
          num: 10,
        },
        {
          rightIcon: 'location',
          title: '地址管理',
        },
      ],
      jump2: [
        {
          rightIcon: 'people',
          title: '我的会员',
          num: '黄金会员',
        },
        {
          rightIcon: 'headset-sharp',
          title: '服务中心',
        },
        {
          rightIcon: 'md-settings',
          title: '系统设置',
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={{ marginBottom: 10 }}>
        <Message></Message>
        <View style={styles.oprate}>
          <Oprate></Oprate>
        </View>
        <View style={{ marginTop: 20 }}>
          {this.state.jump1.map((v, index) => {
            return <Jump key={index} {...v}></Jump>;
          })}
        </View>
        <View style={{ marginTop: 20 }}>
          {this.state.jump2.map((v, index) => {
            return <Jump key={index} {...v}></Jump>;
          })}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  oprate: {
    marginTop: 20,
  },
});
