import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Appbar , PaperProvider } from 'react-native-paper';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {expo} from './app.json'


export default function App() {

  const MyComponent = () => (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );

  return (
    <PaperProvider>
      <MyComponent></MyComponent>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App)