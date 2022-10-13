import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import type { CoverLayerProps } from './type';
const c_deviceHeight = Dimensions.get('window').height;
export default function CoverLayer(props: CoverLayerProps) {
  const [fadeAnim, changeFadeAnim] = useState(0);
  const top = useRef(new Animated.Value(c_deviceHeight)).current;
  console.log('c_deviceHeight', top);

  const c_duration = 1000;
  function showFormBottom() {
    return Animated.timing(top, {
      toValue: 0,
      duration: c_duration,
      useNativeDriver: false,
    }).start();
  }
  showFormBottom();
  return (
    (props.show && (
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: 1, // Bind opacity to animated value
            top,
            justifyContent: 'flex-end',
          },
        ]}>
        {/* <TouchableOpacity></TouchableOpacity> */}
        <Animated.View>{props.renderContent && props.renderContent()}</Animated.View>
      </Animated.View>
    )) ||
    null
  );
}

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
