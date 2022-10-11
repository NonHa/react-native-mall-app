import React, { useState, useEffect } from 'react';
import { use } from '@react-navigation/native';
import { useAppSelector } from '@/app/hooks';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  ToastAndroid,
} from 'react-native';
import { addCommnet } from '@/api/subject';
export default function WriteComment(props) {
  const params = props.route.params;
  console.log('params', params);

  const subjectId = params.id;
  const refresh = params.refresh;
  const info = useAppSelector((state) => state.infoSlice.info);
  const [number, changeNumber] = useState('');

  function submitComment() {
    addCommnet({ subjectId, memberNickName: info?.nickname || '', content: number }).then((res) => {
      if (res.code === 200) {
        ToastAndroid.showWithGravityAndOffset(
          '评论成功',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );

        props.navigation.goBack();
        refresh();
      } else {
        ToastAndroid.showWithGravityAndOffset(
          '评论失败',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          25,
          50,
        );
      }
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        multiline
        textAlignVertical="top"
        numberOfLines={10}
        style={styles.input}
        onChangeText={(value) => changeNumber(value)}
        value={number}
        placeholder="useless placeholder"
      />
      <View style={{ marginTop: 10 }}>
        <Button title="提交" onPress={() => submitComment()}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
