import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { router } from '../../navigation/intercept';
export default function Tabs() {
  function _onPress() {
    router.push('Home', {});
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.tab}
        onPress={_onPress}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <View>
          <Icon name="chatbubble-ellipses-outline" size={40}></Icon>
          <Text style={{ fontSize: 20 }}>话题</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.tab}
        onPress={_onPress}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <View>
          <Icon name="md-flower-outline" size={40}></Icon>
          <Text style={{ fontSize: 20 }}>优选</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.tab}
        onPress={_onPress}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <View>
          <Icon name="gift" size={40}></Icon>
          <Text style={{ fontSize: 20 }}>特惠</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.tab}
        onPress={_onPress}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <View>
          <Icon name="star" size={40}></Icon>
          <Text style={{ fontSize: 20 }}>签到</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  tab: {
    flex: 1,

    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
