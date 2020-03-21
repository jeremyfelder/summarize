import * as React from 'react';
import { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from '../screens/welcome';

const Stack = createStackNavigator();

export class ReadingStack extends Component {
    render () {
        return (
            <Stack.Navigator>
                <Stack.Screen name="welcome" component={Welcome}/>
            </Stack.Navigator>
        )
    }
}