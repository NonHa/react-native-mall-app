import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class CategoryList extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [
        {
          name: '服装',
        },
        {
          name: '餐具',
        },
        {
          name: '配件',
        },
        {
          name: '居家',
        },
        {
          name: '洗护',
        },
        {
          name: '婴童',
        },
        {
          name: '杂货',
        },
        {
          name: '饮食',
        },
      ],
      select: '服装',
    };
    this._press = this._press.bind(this);
  }
  _press(item) {
    this.setState({
      select: item.name,
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
