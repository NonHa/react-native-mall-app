import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class Detail extends React.Component<{
  detailList: { name: string }[];
}> {
  constructor(props: { detailList: { name: string }[] }) {
    super(props);
    this.state = {
      select: '服装',
    };
    this._press = this._press.bind(this);
  }
  _press(item: { name: string }) {
    this.setState({
      select: item.name,
    });
  }
  render() {
    const mapList = this.props.detailList.map((v, index) => {
      return (
        <TouchableHighlight
          key={index}
          style={[styles.item]}
          onPress={() => this._press(v)}
          underlayColor="#ffffff">
          <View>
            <Text>{v.name}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return <View style={styles.container}>{mapList}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    flexWrap: 'wrap',
  },
  item: {
    width: '40%',
    backgroundColor: '#ffffff',

    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    backgroundColor: '#ffffff',
  },
});
