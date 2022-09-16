import React, { Component, useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Text, View, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { userLogin } from '../../api/user';
import { setUserInfo, getInfo } from '../../store/features/user/infoSlice';
import { getToken } from '../../utils/common';

import { StackActions } from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    height: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    paddingLeft: 10,
    overflow: 'hidden',
  },
  input: {
    height: 30,
    width: '100%',
    marginLeft: 10,
    padding: 5,
  },
});
export default function Login({ navigation }) {
  const dispatch = useAppDispatch();
  const [loginMes, changeMes] = useState({ username: 'admin', password: 'macro123' });
  useEffect(() => {
    const fn = async () => {
      const num = (await getToken()) as string;
      // console.log('num', num);

      if (num) {
        navigation.replace('Root');
      }
    };
    fn();
    // setTimeout(, 1);
  }, []);

  const login = () => {
    // return;
    userLogin(loginMes).then((res) => {
      console.log('user-login', res);
      ToastAndroid.showWithGravityAndOffset(
        res.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
      if (res.code === 200) {
        dispatch(setUserInfo(res.data));
        dispatch(getInfo());
        setTimeout(() => {
          const resetAction = StackActions.replace('Root', res.data);
          navigation.dispatch(resetAction);
        }, 500);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Icon name="user" size={20}></Icon>
        <TextInput
          defaultValue="admin"
          style={styles.input}
          value={loginMes.username}
          onChangeText={(username) =>
            changeMes({ username, password: loginMes.password })
          }></TextInput>
      </View>
      <View style={styles.inputRow}>
        <Icon name="key" size={20}></Icon>

        <TextInput
          defaultValue="macro123"
          style={styles.input}
          value={loginMes.password}
          onChangeText={(password) => changeMes({ username: loginMes.username, password })}
          textContentType="password"
          secureTextEntry={true}
          keyboardType="default"></TextInput>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="登录" onPress={() => login()}></Button>
      </View>
    </View>
  );
}