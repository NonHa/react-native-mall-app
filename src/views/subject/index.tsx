import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import TopDetail from './topDetail';
import Subject from '../home/info/subject';
import Info from '../home/info';
import { windowHeight } from '../../utils/index';
import { recommendSubject, recommendSubjectInfo } from '../../api/subject';
import { SubjectItem } from './type';
export default class Home extends React.Component<
  any,
  {
    recommendSubject: SubjectItem[];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      recommendSubject: [],
    };
    this.categorySelect = this.categorySelect.bind(this);
  }
  componentDidMount() {
    this.categorySelect({ recommendStatus: 1 });
  }
  categorySelect(param) {
    recommendSubjectInfo({ page: 1, pageSize: 15, categoryId: 2, ...param }).then((res) => {
      console.log('res.data', res.data);

      this.setState({
        recommendSubject: res.data.list,
      });
    });
  }
  render() {
    return (
      <View>
        <TopDetail categorySelect={this.categorySelect}></TopDetail>
        <ScrollView style={{ height: windowHeight - 200 }}>
          {this.state.recommendSubject.map((v) => {
            return (
              <Info
                key={v.id}
                header={{
                  leftComponents: <Text style={{ fontSize: 18 }}>{v.categoryName}</Text>,
                  rightComponents: null,
                }}
                showBottom
                bottom={v}>
                <Subject {...v}></Subject>
              </Info>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
