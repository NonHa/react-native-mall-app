import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CategoryList from './categoryList';
import Detail from './detail';
import { getProductList } from '../../api/category';

export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      detailList: [],
    };
    this.getDetail = this.getDetail.bind(this);
  }
  getDetail(parentId) {
    getProductList({
      page: 1,
      pageSize: 10,
      parentId,
    }).then((res) => {
      this.setState({
        detailList: res.data.list,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <CategoryList getDetail={this.getDetail}></CategoryList>
        <Detail detailList={this.state.detailList}></Detail>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
  },
});
