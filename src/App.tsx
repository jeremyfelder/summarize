import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainTabNavigator from './navigation/MainTabNavigator';

declare var global: {HermesInternal: null | {}};

function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
};

export default App;
