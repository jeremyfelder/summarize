import * as React from 'react';
import BookList from '../screens/books/bookList';
import { createStackNavigator } from "@react-navigation/stack";
import NewBook from '../screens/books/newBook';

const Stack = createStackNavigator();

export default function BookListsStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="BookList" component={BookList}/>
          <Stack.Screen name="NewBook" component={NewBook}/>
        </Stack.Navigator>
    );
}

  