import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import RouteStack from './src/routes/RouteStack';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <RouteStack />
      <StatusBar backgroundColor={'#4ba8de'} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
