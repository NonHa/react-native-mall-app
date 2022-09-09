import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { getProductList } from '../../api/category';

export default class CategoryList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
      select: '服装',
    };
    this._press = this._press.bind(this);
  }
  _press(item) {
    this.setState(() => ({
      select: item.name,
    }));
    this.props.getDetail(item.id);
  }
  componentDidMount() {
    getProductList({
      page: 1,
      pageSize: 10,
      parentId: 0,
    }).then((res) => {
      this.setState(() => ({
        list: res.data.list,
        select: res.data.list[0].name,
      }));
      this.props.getDetail(res.data.list[0].id);
    });
  }
  render() {
    const mapList = this.state.list.map((v, index) => {
      return (
        <TouchableHighlight key={index} onPress={() => this._press(v)} underlayColor="#ffffff">
          <View style={[styles.item, this.state.select === v.name ? styles.select : null]}>
            <Text>{v.name}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <View style={styles.container}>
        <Text>{mapList}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#f2f2f2',
  },
  item: {
    width: 100,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  select: {
    backgroundColor: '#ffffff',
  },
});
