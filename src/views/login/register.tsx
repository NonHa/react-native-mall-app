import React, { Component, useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Text, View, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addMemeber } from '../../api/user';
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
  tip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
export default function Register({ navigation }) {
  const dispatch = useAppDispatch();
  const [registerMes, changeMes] = useState({ username: '', password: '', phone: '' });
  const form: {
    placeholder: string;
    value: 'username' | 'password' | 'phone';
    iconName: string;
    validate?: (val: string) => boolean;
    secureTextEntry?: boolean;
  }[] = [
    {
      placeholder: '用户名',
      value: 'username',
      iconName: 'user',
    },
    {
      placeholder: '手机号',
      value: 'phone',
      iconName: 'phone',
      validate: (val: string) => {
        const test = /^1[0-9]{10}$/;
        return test.test(val);
      },
    },
    {
      placeholder: '密码',
      value: 'password',
      iconName: 'key',
      secureTextEntry: true,
    },
  ];
  const login = () => {
    let flag = true;
    for (let index = 0; index < form.length; index++) {
      if (!registerMes[form[index].value]) {
        ToastAndroid.showWithGravityAndOffset(
          `请输入${form[index].placeholder}`,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
        return;
      }
      if (form[index].validate) {
        const valid = form[index].validate(registerMes[form[index].value])!;
        if (!valid) {
          ToastAndroid.showWithGravityAndOffset(
            `${form[index].placeholder}格式不正确`,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50,
          );
        }

        flag = valid;

        if (!valid) {
          break;
        }
      }
    }

    if (!flag) return;
    addMemeber(registerMes).then((res) => {
      console.log('user-login', res);
      ToastAndroid.showWithGravityAndOffset(
        res.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50,
      );
      if (res.code === 200) {
      }
    });
  };

  return (
    <View style={styles.container}>
      {form.map((v, index) => {
        return (
          <View key={index} style={styles.inputRow}>
            <Icon name={v.iconName} size={20}></Icon>

            <TextInput
              placeholder={v.placeholder}
              style={styles.input}
              value={registerMes[v.value]}
              onChangeText={(e) => changeMes({ ...registerMes, [v.value]: e })}
              secureTextEntry={v.secureTextEntry}></TextInput>
          </View>
        );
      })}

      <View style={{ marginTop: 20 }}>
        <Button title="提交注册信息" onPress={() => login()}></Button>
      </View>
    </View>
  );
}
