import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useAppSelector } from '../../../app/hooks';
import { connect } from 'react-redux';
import { useLinkTo } from '@react-navigation/native';

export default function UserInfo() {
  const linkTo = useLinkTo();
  const info = useAppSelector((state) => state.infoSlice.info);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: info.icon }}
        style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
      <View style={styles.name}>
        <Text
          style={{ color: '#fff', fontSize: 20, marginTop: 10 }}
          onPress={() => linkTo('/UseDetail')}>
          {info.username}
        </Text>
        <Text style={styles.vipType}>{info.levelName}</Text>
      </View>
    </View>
  );
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
