/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { OnboardingStack } from './navigation/OnboardingStack';

declare var global: {HermesInternal: null | {}};

class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <OnboardingStack />
      </NavigationContainer>
    )
  }
};

export default App;
