import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useLinkTo, useNavigation } from '@react-navigation/native';

import { recommendSubjectDetail, getSubjectCommnet } from '@/api/subject';
import Swiper from '@/components/Swiper';
import Hot from '@/views/home/info/hot';
import Comment from '@/components/comment';
import Info from '../home/info';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import type { SwiperItem } from '@/components/Swiper/type';
import type { SubjectItemState } from './type';
import type { SubjectComment } from '@/components/comment/type';
import type { RootStackScreenProps } from '#/navigation';

export default function SubjectDetail(props: RootStackScreenProps<'SubjectDetail'>) {
  const linkTo = useLinkTo();
  const navigetion = useNavigation<RootStackScreenProps<'WriteComment'>['navigation']>();
  // console.log('props', props);

  const params = props.route.params;
  const subjectId = params.id;

  // console.log('params', params)
  const [subjectItem, changeSubjectItem] = useState<SubjectItemState>({
    productList: [],
    pic: '',
    title: '',
    categoryName: '',
    content: '',
    createTime: '',
  });
  const [swiperItem, changeSwiperItem] = useState<SwiperItem[]>([]);
  const [commentList, changeCommentList] = useState<SubjectComment[]>([]);
  const [canLoadMore, changeCanLoadMore] = useState<boolean>(false);
  const [commentLoading, changeCommentLoading] = useState<boolean>(false);

  const [query, changeQuery] = useState<{ page: number }>({
    page: 1,
  });
  const pageSize = 2;
  useEffect(() => {
    recommendSubjectDetail({ id: params.id }).then((res) => {
      changeSubjectItem(res.data);
      changeSwiperItem([
        {
          component: (
            <Image
              source={{ uri: subjectItem.pic || 'https://reactnative.dev/img/tiny_logo.png' }}
              style={{ width: '100%', height: 200 }}></Image>
          ),
          style: {},
        },
      ]);
    });
  }, []);
  useEffect(() => {
    getComment();
  }, [query]);
  async function getComment() {
    await getSubjectCommnet({ id: params.id, page: query.page, pageSize }).then((res) => {
      if (commentList.length === res.data.total) {
        changeCommentLoading(true);

        return;
      }

      changeCommentLoading(false);

      changeCommentList([...commentList, ...res.data.list]);
    });
  }
  function collectCount() {
    return (
      <View>
        <View style={styles.loveAndTap}>
          <Icon name="heart" size={25}></Icon>
          <FontAwesome name="shopping-cart" size={22} style={{ marginLeft: 10 }}></FontAwesome>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={{ backgroundColor: '#fff' }}
        data={commentList}
        onEndReached={(info) => {
          setTimeout(() => {
            if (canLoadMore && !commentLoading) {
              changeQuery({
                page: query.page + 1,
              });
            }
          }, 100);
        }}
        onEndReachedThreshold={0.1}
        keyExtractor={(item) => {
          // console.log('item', item);

          return item.id;
        }}
        renderItem={({ item: v }) => {
          return (
            <View
              key={v.id}
              style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
              <Comment {...v}></Comment>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View style={{ backgroundColor: '#ccc' }}>
              <View style={{ height: 200, backgroundColor: '#fff' }}>
                <Swiper swiperItem={swiperItem}></Swiper>
              </View>
              <View style={styles.describe}>
                <Text style={{ fontSize: 30 }}>{subjectItem.title}</Text>
                <View style={styles.contentHead}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={{
                        uri: subjectItem.pic || 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                      style={{ width: 40, height: 40, borderRadius: 20 }}></Image>
                    <Text style={{ marginLeft: 10 }}>{subjectItem.categoryName}</Text>
                  </View>
                  <Text>{subjectItem.createTime}</Text>
                </View>
                <View>
                  <Text>{subjectItem.content}</Text>
                </View>
              </View>
              <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
                <Text style={{ paddingHorizontal: 30, paddingVertical: 20 }}>相关单品</Text>
                {subjectItem.productList.map((v, index) => {
                  return (
                    <Hot
                      key={index}
                      title={v.name}
                      img={''}
                      price={v.price}
                      collectCount={collectCount(v)}></Hot>
                  );
                })}
                <View style={styles.icons}>
                  <View style={styles.iconsItem}>
                    <Icon name="heart" size={25}></Icon>
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                      {subjectItem.collectSubjectCollectCount || 0}
                    </Text>
                  </View>
                  <View style={styles.iconsItem}>
                    <Icon name="eye" size={20} style={{ marginLeft: 10 }}></Icon>
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                      {subjectItem.collectSubjectReadCount || 0}
                    </Text>
                  </View>
                  <View style={styles.iconsItem}>
                    <FontAwesome
                      name="share-square"
                      size={20}
                      style={{ marginLeft: 10 }}></FontAwesome>

                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                      {subjectItem.collectSubjectCommentCount || 0}
                    </Text>
                  </View>
                  <View style={styles.iconsItem}>
                    <MaterialIcons
                      name="message"
                      size={20}
                      style={{ marginLeft: 10 }}></MaterialIcons>
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                      {subjectItem.collectSubjectCommentCount || 0}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ backgroundColor: '#fff', marginTop: 20 }}>
                <Info
                  header={{
                    leftComponents: <Text style={{ fontSize: 18 }}>精彩评论</Text>,
                    rightComponents: (
                      <TouchableHighlight
                        onPress={() =>
                          navigetion.navigate(`WriteComment`, {
                            refresh: () => {
                              changeCommentList([]);
                              changeQuery({
                                page: 1,
                              });
                            },
                            id: subjectId,
                          })
                        }
                        underlayColor="none">
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <FontAwesome
                            name="pencil-square-o"
                            size={20}
                            style={{ marginLeft: 10 }}></FontAwesome>
                          <Text style={{ marginLeft: 10 }}>写评论</Text>
                        </View>
                      </TouchableHighlight>
                    ),
                    style: styles.infoHeader,
                  }}
                  style={{}}></Info>
              </View>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return commentLoading ? (
            <View style={{ padding: 20 }}>
              <Text style={{ textAlign: 'center' }}>没有更多评论了...</Text>
            </View>
          ) : null;
        }}
        onMomentumScrollBegin={() => {
          changeCanLoadMore(true);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  describe: {
    padding: 20,
    backgroundColor: '#fff',
  },
  contentHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  product: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 5,
  },
  loveAndTap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 60,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
