import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CategoryList from './categoryList';
import Detail from './detail';
export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <CategoryList></CategoryList>
        <Detail></Detail>
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
