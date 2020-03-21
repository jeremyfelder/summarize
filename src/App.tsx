import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainTabNavigator } from './navigation/MainTabNavigator';

declare var global: {HermesInternal: null | {}};

class App extends Component {
  render () {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="black" />
          <MainTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
};

export default App;
