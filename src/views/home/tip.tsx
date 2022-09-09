import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Tip() {
  function onPressLearnMore() {}
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="warning" size={20}></Icon>
        <Text style={{ marginLeft: 10, fontSize: 15 }}>提示</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>详情</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  icon: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },

  btn: {
    flex: 1,
  },
  btnText: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: 60,
    textAlign: 'center',
    borderRadius: 4,
    fontSize: 15,
    padding: 4,
  },
});
