import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { navsConfig } from './navsConfig';
import { RootStackParamList, NativeStackScreenItemProps } from '/#/navigation';
import Login from '../views/login';
import { getToken, removeToken } from '../utils/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getTokens } from '../store/features/user/infoSlice';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavs() {
  // const navigation = useNavigation();
  // const [token, setToken] = useState<string>('');
  // useEffect(() => {
  //   setTimeout(async () => {
  //     const num = (await getToken()) as string;
  //     setToken(num);
  //     navigation.reset(num ? 'Root' : 'Home');
  //   }, 500);
  // }, []);

  // const dispatch = useDispatch();
  // // dispatch(getTokens());
  // token = useSelector((state) => state.infoSlice).token;
  // console.log('token1', token);

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        title: 'Mall',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icon name="bell" size={24} onPress={async () => await removeToken()}></Icon>
        ),
        headerRight: () => (
          <View style={styles.headerLeft}>
            <Icon style={styles.headerLeftIcon} name="search" size={24}></Icon>
            <Icon style={styles.headerLeftIcon} name="shopping-cart" size={24}></Icon>
          </View>
        ),
      }}>
      {navsConfig.map(function (v, index) {
        return (
          <Stack.Screen
            key={index}
            name={v.name}
            component={v.component}
            options={v.option}></Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    width: 60,
  },
  headerLeftIcon: { flex: 1 },
});
