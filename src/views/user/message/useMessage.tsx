import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import Picker from 'react-native-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import type { CameraOptions } from 'react-native-image-picker';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

import Jump from '../jump';
import { uploadFile } from '@/utils/http';
import { updateMemeber } from '../../../api/user';
import type { UserInfo } from '#/index';
import { TimeDateFormat } from '../../../utils/timeFormat';
import Radio from '@/components/radio';
import { cityData } from '@/utils/city';
import type { RootState } from '@/store';

class UseMessage extends React.Component<
  { info: UserInfo },
  { modifyForm: UserInfo; setDate: Date }
> {
  constructor(props: { info: UserInfo }) {
    super(props);
    this.state = {
      modifyForm: {
        ...props.info,
      },
      setDate: new Date(),
    };

    Picker.init({
      pickerData: cityData.map((v) => {
        return {
          [v.name]: v.city.map((k) => k.name),
        };
      }),
      selectedValue: ['湖南'],
      pickerConfirmBtnText: '确认',
      pickerCancelBtnText: '取消',
      pickerTitleText: '',

      onPickerConfirm: (data) => {
        console.log(data);
        this.setState({
          modifyForm: { ...this.state.modifyForm, city: data[1] },
        });
      },
    });
    // console.log('modifyForm', this.state.modifyForm);

    this._submit = this._submit.bind(this);
    this.pickTime = this.pickTime.bind(this);
    this._setTime = this._setTime.bind(this);
  }
  componentDidMount() {}
  pickTime() {
    DateTimePickerAndroid.open({
      value: this.state.setDate,
      onChange: this._setTime,
      mode: 'date',
      is24Hour: true,
    });
  }
  _setTime(event: DateTimePickerEvent) {
    this.setState((state) => {
      return {
        modifyForm: {
          ...this.state.modifyForm,
          birthday: TimeDateFormat(new Date(event.nativeEvent.timestamp as number)),
        },
      };
    });
  }
  _submit() {
    updateMemeber(this.state.modifyForm).then((res) => {
      console.log('state', res);
      if (res.code === 200) {
        ToastAndroid.showWithGravityAndOffset(
          '更新信息成功',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
    });
  }
  async chooseImage() {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    if (result && result.assets) {
      // const source = result.assets[0].uri.replace('file://', ''); // ios
      const file = {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: result.assets[0].fileName,
      };

      const res = await uploadFile(file);
      if (res.code === 200) {
        this.setState({
          modifyForm: { ...this.state.modifyForm, icon: res.data },
        });
      }
      console.log('result', res);
    }
  }
  render() {
    const jumpData = [
      {
        title: '用户名ID',
        hideArrow: true,
      },
      {
        hideArrow: true,
        title: '昵称',
        render: () => {
          return (
            <TextInput
              style={styles.input}
              value={this.state.modifyForm.nickname}
              onChangeText={(nickname) => {
                this.setState({
                  modifyForm: { ...this.state.modifyForm, nickname },
                });
              }}></TextInput>
          );
        },
      },
      {
        hideArrow: true,
        title: '性别',
        render: () => {
          const onChange = (value: string | number) => {
            this.setState({
              modifyForm: { ...this.state.modifyForm, gender: value },
            });
          };
          return (
            <View style={{ flexDirection: 'row' }}>
              <Radio value={this.state.modifyForm.gender} label={1} onChange={onChange}>
                男
              </Radio>
              <Radio value={this.state.modifyForm.gender} label={2} onChange={onChange}>
                女
              </Radio>
            </View>
          );
        },
      },
      {
        title: '生日',
        render: () => {
          return <Text>{this.state.modifyForm.birthday}</Text>;
        },
        pressFun: this.pickTime,
      },
      {
        title: '城市',
        render: () => {
          return <Text>{this.state.modifyForm.city}</Text>;
        },
        pressFun() {
          Picker.show();
        },
      },
      {
        title: '职业',
        hideArrow: true,
        render: () => {
          return (
            <TextInput
              style={styles.input}
              value={this.state.modifyForm.job}
              onChangeText={(job) => {
                this.setState({
                  modifyForm: { ...this.state.modifyForm, job },
                });
              }}></TextInput>
          );
        },
      },
      {
        title: '个性签名',
        hideArrow: true,
        render: () => {
          return (
            <TextInput
              style={styles.input}
              value={this.state.modifyForm.personalizedSignature}
              onChangeText={(personalizedSignature) => {
                this.setState({
                  modifyForm: { ...this.state.modifyForm, personalizedSignature },
                });
              }}></TextInput>
          );
        },
      },
    ];

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Text onPress={() => this.chooseImage()}> */}
          <TouchableHighlight onPress={() => this.chooseImage()} underlayColor="none">
            <Image
              source={{
                uri: this.state.modifyForm.icon ? this.state.modifyForm.icon : undefined,
              }}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: '#ccc',
              }}></Image>
          </TouchableHighlight>

          {/* </Text> */}
        </View>
        <View style={{ marginTop: 20 }}>
          {jumpData.map((v, index) => {
            return <Jump key={index} {...v} rightBoxStyle={{ width: 70 }}></Jump>;
          })}
          <View
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: '#ffff',
            }}>
            {this.props.info.categoryList.map((v, index) => {
              return (
                <Text
                  key={index}
                  style={{
                    width: '33.33%',
                    textAlign: 'center',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    height: 40,
                    lineHeight: 40,
                    borderRadius: 10,
                  }}>
                  {v.name}
                </Text>
              );
            })}
          </View>
          <View style={{ marginTop: 20, padding: 20 }}>
            <Button title="保存" onPress={() => this._submit()}></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  info: state.infoSlice.info,
});
export default connect(mapStateToProps, {})(UseMessage);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    height: '100%',
    width: '90%',
    marginLeft: 10,
    padding: 0,
  },
});
