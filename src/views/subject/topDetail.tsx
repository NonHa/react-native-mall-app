import React from 'react';
import { Text, View, ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { getSubjectCategoryList } from '../../api/subject';

export default class TopDetail extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      subjectCategory: [],
    };
    this._press = this._press.bind(this);
  }
  componentDidMount() {
    getSubjectCategoryList().then((res) => {
      this.setState({
        subjectCategory: [
          {
            name: '全部专题',
            id: null,
          },
          ...res.data.list.map((v) => {
            return {
              name: v.name,
              id: v.id,
            };
          }),
        ],
      });
    });
  }
  _press(id) {
    this.props.categorySelect({ categoryId: id });
  }
  render() {
    return (
      <View>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.subjectCategory.map((v, index) => {
            return (
              <TouchableHighlight
                key={index}
                onPress={() => this._press(v.id)}
                underlayColor="#ffffff">
                <View style={styles.subjectItem}>
                  <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={{ height: 40, width: 40 }}></Image>
                  <Text>{v.name}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  subjectItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    width: 100,
    height: 90,
    // backgroundColor: '#fff',
  },
});
