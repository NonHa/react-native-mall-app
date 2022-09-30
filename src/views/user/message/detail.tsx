import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useAppSelector } from '../../../app/hooks';
import { connect } from 'react-redux';
import Jump from '../jump';

class UseDetail extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    console.log('this.props==》', this.props.info);
    const jumpData = [
      {
        title: '个人信息',
        goPath: '/UseMessage',
      },
      {
        title: '修改密码',
      },
      {
        title: '修改手机',
      },
    ];
    const jumpData2 = [
      {
        title: '我的会员',
      },
    ];
    return (
      <View>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
          <Text style={{ color: '#000', fontSize: 20, marginLeft: 20 }}>
            {this.props.info.username}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {jumpData.map((v, index) => {
            return <Jump key={index} {...v}></Jump>;
          })}
        </View>
        <View style={{ marginTop: 20 }}>
          {jumpData2.map((v, index) => {
            return <Jump key={index} {...v}></Jump>;
          })}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  info: state.infoSlice.info,
});
export default connect(mapStateToProps, {})(UseDetail);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    flexDirection: 'row',
    paddingLeft: 60,
    alignItems: 'center',
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
