import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';
import { navsConfig } from './navsConfig';
import { RootStackParamList, NativeStackScreenItemProps } from '/#/navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavs() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Mall',
        headerTitleAlign: 'center',
        headerLeft: () => <Icon name="bell" size={24}></Icon>,
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
