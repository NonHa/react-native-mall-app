import React, { useEffect, useState } from 'react';

import { useAppSelector } from '@/app/hooks';
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import Hot from '@/views/home/info/hot';
import { getCollectList } from '@/api/collect';
import { HotProps } from '@/views/home/info/type';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CollectMessage(props) {
  const linkTo = useLinkTo();
  const info = useAppSelector((state) => state.infoSlice.info);
  const params = props.route.params;
  const collectType = params.collectType;
  const [collectList, changeCollectList] = useState<HotProps[]>([]);
  const [refresh, changeRefresh] = useState<boolean>(false);
  // console.log('info', info);

  useEffect(() => {
    console.log('props===>', props.route);
    getList();
  }, []);
  const getList = () => {
    changeRefresh(true);

    getCollectList({ memberId: info.id, collectType: collectType }).then((res) => {
      changeRefresh(false);
      console.log('res', res);

      changeCollectList(
        res.data.map((v): HotProps => {
          return {
            img: v.img,
            id: collectType === 1 ? v.collectProductId : v.collectSubjectId,
            title: collectType === 1 ? v.collectProductName : v.collectSubjectTitle,
            price: v.collectProductPromotionPrice,
          };
        }),
      );
    });
  };
  const collectCount = (item) => {
    return (
      <View>
        <View style={styles.loveAndTap}>
          <Icon name="heart" size={25}></Icon>
          <Text style={{ fontSize: 15 }}>{item.collectSubjectCollectCount || 0}</Text>
          <Icon name="eye" size={20} style={{ marginLeft: 10 }}></Icon>
          <Text style={{ fontSize: 15 }}>{item.collectSubjectReadCount || 0}</Text>
          <MaterialIcons name="message" size={20} style={{ marginLeft: 10 }}></MaterialIcons>
          <Text style={{ fontSize: 15 }}>{item.collectSubjectCommentCount || 0}</Text>
        </View>
      </View>
    );
  };
  function _linkTo(props: HotProps) {
    if (collectType === 1) {
      linkTo(`/ProductInfo?id=${props.id}`);
    } else if (collectType === 2) {
      linkTo(`/SubjectDetail?id=${props.id}`);
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={collectList}
        renderItem={({ item: v }) => {
          return (
            <Hot
              key={v.id}
              {...v}
              collectCount={collectType === 1 ? null : collectCount(v)}
              linkTo={_linkTo}></Hot>
          );
        }}
        refreshing={refresh}
        onRefresh={() => getList()}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
