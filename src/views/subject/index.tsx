import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import TopDetail from './topDetail';
import Subject from '../home/info/subject';
import Info from '../home/info';
import { windowHeight } from '../../utils/index';
export default class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <TopDetail></TopDetail>
        <ScrollView style={{ height: windowHeight - 200 }}>
          <Info
            header={{
              leftComponents: <Text style={{ fontSize: 18 }}>餐厨专题</Text>,
              rightComponents: null,
            }}
            showBottom>
            <Subject></Subject>
          </Info>
          <Info
            header={{
              leftComponents: <Text style={{ fontSize: 18 }}>餐厨专题</Text>,
              rightComponents: null,
            }}
            showBottom>
            <Subject></Subject>
          </Info>
          <Info
            header={{
              leftComponents: <Text style={{ fontSize: 18 }}>餐厨专题</Text>,
              rightComponents: null,
            }}
            showBottom>
            <Subject></Subject>
          </Info>
          <Info
            header={{
              leftComponents: <Text style={{ fontSize: 18 }}>餐厨专题</Text>,
              rightComponents: null,
            }}
            showBottom>
            <Subject></Subject>
          </Info>
        </ScrollView>
      </View>
    );
  }
}
