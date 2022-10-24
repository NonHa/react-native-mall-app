import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Modal,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { OrderItem, OrderCommentRef } from './type';
import Star from '@/components/Star';
export default forwardRef<OrderCommentRef, OrderItem>(function OrderComment(props, ref) {
  const [product, setProduct] = useState(props.productList[0]);
  const [selectStar, setSelectStar] = useState(-1);
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    console.log('product', product);
  }, []);
  useImperativeHandle(ref, () => {
    return { selectStar, inputText };
  });
  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: '#ccc', height: '100%', padding: 10, position: 'relative' }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 30,
            padding: 10,
            paddingTop: 40,
            position: 'relative',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              position: 'absolute',
              backgroundColor: 'red',
              top: -20,
              left: '50%',
              marginLeft: -20,
            }}>
            <Image
              source={{ uri: product.productPic }}
              style={{
                height: '100%',
                width: '100%',
              }}></Image>
          </View>
          <Text style={{ textAlign: 'center', marginTop: 5 }}>{product.discription}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{ textAlign: 'center' }}>描述相符</Text>
            <Star
              showStarNum={5}
              onSelectFun={(index) => setSelectStar(index)}
              selectStyle={(index) => {
                if (index <= selectStar) {
                  return {
                    color: 'red',
                  };
                } else {
                  return {};
                }
              }}></Star>
          </View>
          <TextInput
            multiline
            textAlignVertical="top"
            numberOfLines={10}
            style={styles.input}
            onChangeText={(value) => setInputText(value)}
            value={inputText}
            placeholder="请输入评价"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  input: {},
});
