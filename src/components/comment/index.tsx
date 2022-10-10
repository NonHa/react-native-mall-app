import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SubjectComment } from './type';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Comment(props: SubjectComment) {
  return (
    <View style={{ paddingVertical: 10 }}>
      <View style={styles.head}>
        <Image
          source={{ uri: props.memberIcon || '' }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#ccc',
          }}></Image>
        <View style={{ marginLeft: 10 }}>
          <Text>{props.memberNickName}</Text>
          <Text>{props.memberCity}</Text>
        </View>
      </View>
      <Text style={{ paddingVertical: 10 }}>{props.content}</Text>
      <View style={styles.bottom}>
        <Text>{props.createTime}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="heart" size={25}></Icon>
            <Text style={{ marginLeft: 5 }}>0</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
            <Icon name="md-thumbs-up-sharp" size={25}></Icon>
            <Text style={{ marginLeft: 5 }}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
