import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store';
export default function Main() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
