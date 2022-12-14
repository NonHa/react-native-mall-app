import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Modal,
  TouchableHighlight,
  FlatList,
  TextInput,
  Switch,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { memberAddress, addMemberAddress } from '@/api/user';
import Radio from '@/components/radio';
import BasePage from '@/components/BasePage';
import Picker from 'react-native-picker';
import { cityData } from '@/utils/city';
import { AddressModel } from './type';
export default function Address(props: {
  isOprate: boolean;
  selectItem?: boolean;
  selectItemFun?: (item: AddressModel) => void;
}) {
  const [addressList, changeAddressList] = useState<AddressModel[]>([]);
  const [defaultAddress, changeDefaultAddress] = useState(0);
  const [addressModel, changeAddressModel] = useState<{
    name: string;
    phoneNumber: string;
    defaultStatus: boolean;
    detailAddress: string;
    province: string;
    city: string;
    region: string;
  }>({ defaultStatus: false });
  const [modalVisible, changeModalVisible] = useState<boolean>(false);
  function getAddressList() {
    memberAddress().then((res) => {
      changeAddressList(res.data);
      if (res.data && res.data.length > 0) {
        changeDefaultAddress(res.data[0].id);
      }
    });
  }
  useEffect(() => {
    getAddressList();
  }, []);

  Picker.init({
    pickerData: cityData.map((v) => {
      return {
        [v.name]: v.city.map((k) => {
          return {
            [k.name]: k.area,
          };
        }),
      };
    }),
    selectedValue: ['湖南'],
    pickerConfirmBtnText: '确认',
    pickerCancelBtnText: '取消',
    pickerTitleText: '',

    onPickerConfirm: (data) => {
      console.log(data);
      changeAddressModel({
        ...addressModel,
        province: data[0],
        city: data[1],
        region: data[2],
      });
    },
  });

  function _onSubmit() {
    addMemberAddress({ ...addressModel, defaultStatus: addressModel.defaultStatus ? 1 : 0 }).then(
      (res) => {
        console.log('res', res);
        if (res.code === 200) {
          changeModalVisible(false);
          getAddressList();
        }
      },
    );
  }
  function editItem(item) {
    changeAddressModel({ ...item, defaultStatus: item.defaultStatus === 1 });
    changeModalVisible(true);
  }
  function radioChange(item) {
    addMemberAddress({ ...item, defaultStatus: defaultAddress !== item.id ? 1 : 0 }).then((res) => {
      console.log('res', res);
      if (res.code === 200) {
        changeModalVisible(false);
        changeDefaultAddress(item.id);
        // getAddressList();
      }
    });
  }
  const formList: {
    label: string;
    filed: string;
    render: (item: { filed: string }) => React.ReactNode;
  }[] = [
    {
      label: '收货人',
      filed: 'name',
      render: (v) => {
        return (
          <TextInput
            style={styles.input}
            value={addressModel[v.filed]}
            onChangeText={(val) =>
              changeAddressModel({
                ...addressModel,
                [v.filed]: val,
              })
            }></TextInput>
        );
      },
    },
    {
      label: '手机号码',
      filed: 'phoneNumber',
      render: (v) => {
        return (
          <TextInput
            style={styles.input}
            value={addressModel[v.filed]}
            keyboardType="numeric"
            onChangeText={(val) =>
              changeAddressModel({
                ...addressModel,
                [v.filed]: val,
              })
            }></TextInput>
        );
      },
    },
    {
      label: '所在地区',
      filed: 'area',
      render: (v) => {
        const text = `${addressModel.province || ''} ${addressModel.city || ''} ${
          addressModel.region || ''
        }`;
        return (
          <Text style={[styles.input, { lineHeight: 40 }]} onPress={() => Picker.show()}>
            {text ? text : '请选择'}
          </Text>
        );
      },
    },
    {
      label: '详细地址',
      filed: 'detailAddress',
      render: (v) => {
        return (
          <TextInput
            style={[
              styles.input,
              {
                height: 100,
              },
            ]}
            value={addressModel[v.filed]}
            multiline
            textAlignVertical="top"
            numberOfLines={10}
            onChangeText={(val) => {
              changeAddressModel({
                ...addressModel,
                [v.filed]: val,
              });
            }}></TextInput>
        );
      },
    },
    {
      label: '',
      filed: 'defaultStatus',
      render: (v) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <Text style={{ fontSize: 20, color: '#000', lineHeight: 40 }}>设为默认收货地址</Text>
            <Switch
              value={addressModel[v.filed]}
              onValueChange={() =>
                changeAddressModel({
                  ...addressModel,
                  [v.filed]: !addressModel[v.filed],
                })
              }></Switch>
          </View>
        );
      },
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10, flex: 1, backgroundColor: '#ccc' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={null}
          style={{ flex: 1 }}
          data={addressList}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight
                onPress={() => props?.selectItemFun && props?.selectItemFun(item)}
                underlayColor="none">
                <View>
                  <View
                    style={[
                      {
                        flexDirection: 'row',
                        padding: 10,
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        marginTop: !props.isOprate ? 0 : 10,
                        borderTopRightRadius: index === 0 ? 10 : 0,
                        borderTopLeftRadius: index === 0 ? 10 : 0,
                        borderBottomLeftRadius:
                          !props.isOprate && index === addressList.length - 1 ? 10 : 0,
                        borderBottomRightRadius:
                          !props.isOprate && index === addressList.length - 1 ? 10 : 0,
                      },
                      props.isOprate ? styles.isOprate : styles.normal,
                    ]}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                      }}>
                      <FontAwesome5 name="home" size={30} color="#fff"></FontAwesome5>
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#000', alignItems: 'center' }}>
                          {item.name}
                        </Text>
                        <Text style={{ marginLeft: 10 }}>{item.phoneNumber}</Text>
                      </View>
                      <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 15, color: '#000' }}>
                          {item.province + ' ' + item.city + ' ' + item.region}
                        </Text>
                      </View>
                      <Text style={{ marginTop: 5, fontSize: 15, color: '#000' }}>
                        {item.detailAddress}
                      </Text>
                    </View>
                    <FontAwesome5 name="edit" onPress={() => editItem(item)}></FontAwesome5>
                  </View>
                  {props.isOprate ? (
                    <View
                      style={[
                        props.isOprate ? styles.isShowOprate : {},
                        {
                          padding: 10,
                          backgroundColor: '#fff',
                        },
                      ]}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderTopWidth: 1,
                          borderTopColor: '#ccc',
                        }}>
                        <Radio
                          value={defaultAddress}
                          label={item.id}
                          onChange={() => radioChange(item)}>
                          默认
                        </Radio>
                        <Text>删除</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item, index) => item.id}></FlatList>
      </View>

      <View style={{ backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text
          style={{
            color: '#fff',
            backgroundColor: 'red',
            height: 40,
            borderRadius: 20,
            textAlign: 'center',
            lineHeight: 40,
            fontSize: 20,
          }}
          onPress={() => editItem({})}>
          + 添加收货地址
        </Text>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          changeModalVisible(!modalVisible);
        }}>
        <BasePage
          headerProps={{ leftTitle: '添加收货地址', close: () => changeModalVisible(false) }}>
          <View>
            {formList.map((v, index) => {
              return v.label ? (
                <View
                  key={index}
                  style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center' }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 18,
                      textAlign: 'center',
                      lineHeight: 40,
                      padding: 20,
                      width: 100,
                    }}>
                    {v.label}
                  </Text>
                  {v.render(v)}
                </View>
              ) : (
                <View key={index}>{v.render(v)}</View>
              );
            })}
            <View
              style={{
                padding: 20,
              }}>
              <Text
                style={{
                  height: 40,

                  backgroundColor: 'red',
                  borderRadius: 40,
                  textAlign: 'center',
                  lineHeight: 40,
                  color: '#fff',
                  fontSize: 20,
                }}
                onPress={() => _onSubmit()}>
                保存
              </Text>
            </View>
          </View>
        </BasePage>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  isOprate: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    margin: 0,
  },
  isShowOprate: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  normal: {
    margin: 0,
  },
  input: {
    backgroundColor: '#eeee',
    flex: 1,
    padding: 10,
    height: 50,
    borderRadius: 10,
    color: '#c0c0c0',
  },
});
