import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StatsStack from './StatsStack';
import BookListsStack from './BookListsStack';
import AccountStack from './AccountStack';

const TabStack = createBottomTabNavigator(); 

export default function MainTabNavigator () {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Stats" component={ StatsStack } />
            <TabStack.Screen name="Book Lists" component={ BookListsStack } />
            <TabStack.Screen name="Account" component={ AccountStack } />
        </TabStack.Navigator>
    )
}