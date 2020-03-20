import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { OnboardingStack } from './navigation/OnboardingStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

declare var global: {HermesInternal: null | {}};

class App extends Component {
  render () {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="black" />
          <OnboardingStack />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
};

export default App;
