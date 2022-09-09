import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Jump extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name={this.props.rightIcon} size={25}></Icon>
          <Text style={{ marginLeft: 8, fontSize: 20 }}>{this.props.title}</Text>
        </View>
        <View style={styles.item}>
          <Text style={{ marginRight: 8, fontSize: 20 }}>{this.props.num}</Text>
          <Icon name="arrow-forward" size={25}></Icon>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
