import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';
import type { CoverLayerProps, ModeRef } from './type';
const c_deviceHeight = Dimensions.get('window').height;

export default forwardRef<ModeRef, CoverLayerProps>(function CoverLayer(
  props: CoverLayerProps,
  ref,
) {
  const [modalVisible, changeModalVisible] = useState<boolean>(false);

  function show() {
    changeModalVisible(true);
  }
  function hideModel() {
    changeModalVisible(false);
  }
  useImperativeHandle(ref, () => {
    return { show, hideModel };
  });
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={() => {
        changeModalVisible(!modalVisible);
      }}>
      <TouchableHighlight
        style={{
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'flex-end',
        }}
        underlayColor="none">
        {props.children}
      </TouchableHighlight>
    </Modal>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 999,
    width: '100%',
    opacity: 0,
    // height: 200,
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
    color: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
