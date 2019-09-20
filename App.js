import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Routes from './src/Routes'; 
import SignUp from './src/pages/SignUp';
import Login from './src/pages/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    justifyContent: 'center',
  },
});
