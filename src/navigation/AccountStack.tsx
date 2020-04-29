import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account/account';

const Stack = createStackNavigator()

export default function AccountStack () {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    )
}
