import { Component } from 'react';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReadingStack } from './ReadingStack';
import { WillReadStack } from './WillReadStack';
import { HaveReadStack } from './HaveReadStack';

const TabStack = createBottomTabNavigator(); 

export class MainTabNavigator extends Component {
    render () {
        return (
            <TabStack.Navigator>
                <TabStack.Screen name="Reading" component={ ReadingStack } />
                <TabStack.Screen name="Will Read" component={ WillReadStack } />
                <TabStack.Screen name="Have Read" component={ HaveReadStack } />
            </TabStack.Navigator>
        )
    }
}