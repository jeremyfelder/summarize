import * as React from 'react';
import Books from '../screens/books/books';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function BookListsStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Books" component={Books}/>
        </Stack.Navigator>
    );
}

  