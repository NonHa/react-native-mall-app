import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Collect extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const detail = this.props.info.detail || {};

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>我的订单</Text>
          <Text>我的收藏</Text>
        </View>
        <View style={styles.item}>
          <Text>{detail.collectProductCount || 0}</Text>
          <Text>商品</Text>
        </View>
        <View style={styles.item}>
          <Text>{detail.collectSubjectCount || 0}</Text>
          <Text>专题</Text>
        </View>
        <View style={styles.item}>
          <Text>{detail.collectCommentCount || 0}</Text>
          <Text>话题</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.infoSlice.info,
});
export default connect(mapStateToProps)(Collect);
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
