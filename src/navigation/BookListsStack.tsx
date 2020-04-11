import * as React from 'react';
import Summaries from '../screens/summaries';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// Change this to just have progressBarCell s and have a sorting option based on progess.

export default function BookListsStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="summaries" component={Summaries}/>
        </Stack.Navigator>
    );
}

  