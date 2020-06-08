import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsStack, BookListsStack, AccountStack } from './index';
import { Colors } from '../assets/';
import { Icon } from 'react-native-elements';


const TabStack = createBottomTabNavigator(); 

export default function MainTabNavigator () {
    return (
        <TabStack.Navigator
            initialRouteName="Stats"
            backBehavior="history"
            tabBarOptions={{
                activeTintColor: Colors.black,
                activeBackgroundColor: Colors.whitesmoke,
                inactiveTintColor: Colors.grey,
                inactiveBackgroundColor: Colors.white,
                showLabel: true,
                showIcon: true,
                labelPosition:"below-icon",
                allowFontScaling: false,
                adaptive: false,
                keyboardHidesTabBar: false,
            }}
        >
            <TabStack.Screen 
                name="Stats" 
                component={ StatsStack }
                options={{
                    tabBarIcon: () => (
                        <Icon name="ios-person" color={"#4F8EF7"} size={30} />
                      ),
                }}
            />
            <TabStack.Screen name="Book Lists" component={ BookListsStack } />
            <TabStack.Screen name="Account" component={ AccountStack } />
        </TabStack.Navigator>
    )
}