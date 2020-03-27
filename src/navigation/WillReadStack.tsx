import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';

const Stack = createStackNavigator()

export default function WillReadStack () {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}