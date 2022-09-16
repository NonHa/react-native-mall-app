import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useAppSelector } from '../../../app/hooks';
import { connect } from 'react-redux';
class UserInfo extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  componentDidMount() {
    // const { info } = useAppSelector((state) => state.infoSlice);

    this.setState({
      userInfo: this.props.info,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
        <View style={styles.name}>
          <Text style={{ color: '#fff', fontSize: 20, marginTop: 10 }}>
            {this.state.userInfo.username}
          </Text>
          <Text style={styles.vipType}>黄金会员</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  info: state.infoSlice.info,
});
export default connect(mapStateToProps, {})(UserInfo);
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
