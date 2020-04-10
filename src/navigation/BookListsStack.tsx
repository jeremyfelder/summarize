import * as React from 'react';
import Welcome from '../screens/welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BookListsStack () {
    return (
        <Tab.Navigator initialRouteName={'Reading'}>
          <Tab.Screen name="Reading" component={ Welcome } />
          <Tab.Screen name="Wish List" component={ Welcome } />
          <Tab.Screen name="Completed" component={ Welcome } />
        </Tab.Navigator>
    );
}

  