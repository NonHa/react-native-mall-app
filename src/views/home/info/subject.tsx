import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { SubjectItem } from '@/views/subject/type';
export default function Subject(props: SubjectItem) {
  console.log('props', props.pic);
  const linkTo = useLinkTo();

  return (
    <View style={styles.box}>
      <Image
        source={{
          uri: props.pic,
        }}
        style={{ height: 120, width: '100%' }}></Image>
      <View style={styles.message}>
        <View>
          <Text onPress={() => linkTo(`/SubjectDetail?id=${props.subjectId}`)}>
            {props.subjectName}
          </Text>
        </View>
        <View>
          <Text>￥99起</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  message: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
