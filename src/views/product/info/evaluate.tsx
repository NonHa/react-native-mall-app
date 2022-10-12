import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { getComment } from '@/api/product';
import { SubjectComment } from '@/components/comment/type';
import Comment from '@/components/comment';
export default function Evaluate(props) {
  const params = props.route.params;
  const [comment, changeComment] = useState<SubjectComment[]>([]);
  console.log('params', params);

  useEffect(() => {
    getComment({ id: params.id, pageNum: 1, pageSize: 5 }).then((res) => {
      console.log('res-comment', res.data);
      changeComment(
        res.data.list.map((v) => {
          const pics: string[] = (v.pics && v.pics.split(',')) || [];

          return {
            id: v.id,
            memberNickName: v.memberNickName,
            memberIcon: v.memberIcon,
            content: v.content,
            memberCity: v.memberCity,
            contentRender: () => {
              return (
                <View style={{ marginTop: 10 }}>
                  {pics.length > 0 ? (
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                      {pics.map((k, index2) => {
                        return (
                          <View
                            key={index2}
                            style={{ width: '33.33%', height: 90, paddingHorizontal: 10 }}>
                            <Image
                              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                              style={{
                                height: '100%',
                              }}></Image>
                          </View>
                        );
                      })}
                    </View>
                  ) : null}
                  <Text style={{ marginTop: 10 }}>{v.content}435</Text>
                </View>
              );
            },
          };
        }),
      );
    });
  }, []);
  return (
    <View>
      {comment.map((v) => {
        return (
          <View key={v.id} style={{ padding: 20, backgroundColor: '#fff', marginTop: 10 }}>
            <Comment {...v}></Comment>
          </View>
        );
      })}
    </View>
  );
}
