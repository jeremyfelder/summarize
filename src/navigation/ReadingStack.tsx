import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from '../screens/welcome';

const Stack = createStackNavigator();

export default function ReadingStack () {    
    return (
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={Welcome}/>
        </Stack.Navigator>
    )
}