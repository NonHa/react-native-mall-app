import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Modal } from 'react-native';
import Message from './message';
import Oprate from './operate';
import Jump from './jump';
import { useAppDispatch } from '../../app/hooks';
import { getInfo } from '../../store/features/user/infoSlice';
import BasePage from '@/components/BasePage';
import Address from './address';
import { HomeTabScreenProps } from '#/navigation';

export default function User(props: HomeTabScreenProps<'User'>) {
  const dispatch = useAppDispatch();
  dispatch(getInfo());
  const [modalVisible, changeModalVisible] = useState<boolean>(false);
  const [isOprate, changeIsOprate] = useState<boolean>(false);

  const jump1 = [
    {
      rightIcon: 'browsers',
      title: '我的足迹',
      num: 10,
      infoKey: 'my',
    },
    {
      rightIcon: 'book-sharp',
      title: '我的评价',
      num: 10,
      infoKey: 'commentCount',
    },
    {
      rightIcon: 'location',
      title: '地址管理',
      pressFun: () => {
        changeModalVisible(true);
      },
    },
  ];
  const jump2 = [
    {
      rightIcon: 'people',
      title: '我的会员',

      infoKey: 'levelName',
    },
    {
      rightIcon: 'headset-sharp',
      title: '服务中心',
    },
    {
      rightIcon: 'md-settings',
      title: '系统设置',
    },
  ];

  const addressHeaderRender = () => {
    return <Text onPress={() => changeIsOprate(!isOprate)}>{isOprate ? '完成' : '管理'}</Text>;
  };
  return (
    <ScrollView style={{ marginBottom: 10 }}>
      <Message></Message>
      <View style={styles.oprate}>
        <Oprate></Oprate>
      </View>
      <View style={{ marginTop: 20 }}>
        {jump1.map((v, index) => {
          return <Jump key={index} {...v}></Jump>;
        })}
      </View>
      <View style={{ marginTop: 20 }}>
        {jump2.map((v, index) => {
          return <Jump key={index} {...v}></Jump>;
        })}
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          changeModalVisible(!modalVisible);
        }}>
        <BasePage
          headerProps={{
            leftTitle: '我的收货地址',
            close: () => changeModalVisible(false),
            rightRender: addressHeaderRender,
          }}>
          <Address isOprate={isOprate}></Address>
        </BasePage>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  oprate: {
    marginTop: 20,
  },
});
