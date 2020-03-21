import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Component } from "react";
import { Welcome } from '../screens/welcome';

const Stack = createStackNavigator()

export class WillReadStack extends Component {
    render () {
        return (
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        )
    }
}