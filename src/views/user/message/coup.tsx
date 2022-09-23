import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class UserCoup extends React.Component {
  constructor(props: any) {
    super(props);

    console.log('this.props', props.info.detail);
  }

  render() {
    const detail = this.props.info.detail || {};
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>积分</Text>
          <Text>{this.props.info.integration || 0}</Text>
        </View>
        <View style={styles.item}>
          <Text>优惠券</Text>
          <Text>{detail.coupon_count || 0}</Text>
        </View>
        <View style={styles.item}>
          <Text>关注</Text>
          <Text>{detail.attend_count || 0}</Text>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  info: state.infoSlice.info,
});
export default connect(mapStateToProps, {})(UserCoup);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
