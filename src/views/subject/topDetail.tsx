import React from 'react';
import { Text, View, ScrollView, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class TopDetail extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      subject: [
        {
          name: '全部专题',
        },
        {
          name: '全部专题',
        },
        {
          name: '全部专题',
        },
        {
          name: '全部专题',
        },
        {
          name: '全部专题',
        },

        {
          name: '全部专题',
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.state.subject.map((v, index) => {
            return (
              <TouchableHighlight key={index} style={styles.subjectItem}>
                <View>
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
  },
  subjectItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    width: 100,
    height: 90,
    backgroundColor: '#fff',
  },
});
