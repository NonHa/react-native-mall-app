import React from 'react';
import { View } from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Main() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
