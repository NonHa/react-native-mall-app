import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Bottom(props: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.loveAndTap}>
        <Icon name="heart" size={30}></Icon>
        <Text style={{ fontSize: 15 }}>{props.collectCount || 0}</Text>
        <Icon name="eye" size={30} style={{ marginLeft: 10 }}></Icon>
        <Text style={{ fontSize: 15 }}>{props.readCount || 0}</Text>
      </View>
      <View style={styles.chat}>
        <MaterialIcons name="message" size={20}></MaterialIcons>

        <Text style={{ fontSize: 15 }}>{props.commentCount || 0}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 5,
  },
  loveAndTap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
