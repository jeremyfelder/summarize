import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatsStack, BookListsStack, AccountStack } from './index';
import { Colors, Images } from '../assets/';
import TabBarIcon, { tabBarIconArguments } from '../components/tabBarIcon';


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
                showLabel: false,
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
                    tabBarIcon: ({focused, color, size}: tabBarIconArguments) => (
                        <TabBarIcon
                            activeIcon={Images.accountTabIcon}
                            nonActiveIcon={Images.testImage}
                            focused={focused}
                        />
                    )
                }}
            />
            <TabStack.Screen 
                name="Book Lists" 
                component={ BookListsStack } 
                options={{
                    tabBarIcon: ({focused, color, size}: tabBarIconArguments) => (
                        <TabBarIcon
                            activeIcon={Images.accountTabIcon}
                            nonActiveIcon={Images.testImage}
                            focused={focused}
                        />
                    )
                }}
            />
            <TabStack.Screen 
                name="Account" 
                component={ AccountStack } 
                options={{
                    tabBarIcon: ({focused, color, size}: tabBarIconArguments) => (
                        <TabBarIcon
                            activeIcon={Images.accountTabIcon}
                            nonActiveIcon={Images.testImage}
                            focused={focused}
                        />
                    )
                }}
            />
        </TabStack.Navigator>
    )
}