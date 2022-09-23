import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { useAppSelector } from '../../../app/hooks';
import { connect } from 'react-redux';
import Jump from '../jump';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
class UseMessage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      modifyForm: {
        birthday: '',
        job: '',
        nickname: '',
        city: '',
        gender: '',
        personalizedSignature: '',
      },
      setDate: new Date(),
    };
  }
  componentDidMount() {}
  _setTime() {}
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
              defaultValue="admin"
              style={styles.input}
              value={this.state.modifyForm.username}></TextInput>
          );
        },
      },
      {
        hideArrow: true,
        title: '性别',
      },
      {
        title: '生日',
        jumpPressOnrender: true,
        render: () => {
          DateTimePickerAndroid.open({
            value: this.state.setDate,
            onChange: this._setTime,
            mode: 'date',
            is24Hour: true,
          });
        },
      },
      {
        title: '城市',
      },
      {
        title: '职业',
        hideArrow: true,
        render: () => {
          return (
            <TextInput
              defaultValue="admin"
              style={styles.input}
              value={this.state.modifyForm.job}></TextInput>
          );
        },
      },
      {
        title: '个性签名',
        hideArrow: true,
        render: () => {
          return (
            <TextInput
              defaultValue="admin"
              style={styles.input}
              value={this.state.modifyForm.job}></TextInput>
          );
        },
      },
    ];

    return (
      <View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
        </View>
        <View style={{ marginTop: 20 }}>
          {jumpData.map((v, index) => {
            return <Jump key={index} {...v} rightBoxStyle={{ width: 70 }}></Jump>;
          })}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
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
