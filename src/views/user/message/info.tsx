import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class UserInfo extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
        <View style={styles.name}>
          <Text style={{ color: '#fff', fontSize: 20, marginTop: 10 }}>Non</Text>
          <Text style={styles.vipType}>黄金会员</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f4552',
    paddingVertical: 60,
    flexDirection: 'row',
    paddingLeft: 60,
  },
  name: {
    marginLeft: 30,
  },
  vipType: {
    color: '#fff',
    fontSize: 15,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 1,
    textAlign: 'center',
    borderRadius: 3,
    marginTop: 8,
  },
});
