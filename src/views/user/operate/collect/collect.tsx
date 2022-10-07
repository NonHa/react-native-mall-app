import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

class Collect extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const detail = this.props.info.detail || {};

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name="heart" size={40} color="#fc4024"></Icon>
          <Text onPress={() => this.props.linkTo('/CollectInfo')}>我的收藏</Text>
        </View>
        <View style={styles.item}>
          <Text style={{ fontSize: 37 }}>{detail.collectProductCount || 0}</Text>
          <Text>商品</Text>
        </View>
        <View style={styles.item}>
          <Text style={{ fontSize: 37 }}>{detail.collectSubjectCount || 0}</Text>
          <Text>专题</Text>
        </View>
        <View style={styles.item}>
          <Text style={{ fontSize: 37 }}>{detail.collectCommentCount || 0}</Text>
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
