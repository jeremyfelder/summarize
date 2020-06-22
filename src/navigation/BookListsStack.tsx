import * as React from 'react';
import BookList from '../screens/books/bookList';
import { createStackNavigator } from "@react-navigation/stack";
import Book from '../screens/books/book';
import NoteList from '../screens/notes/noteList';
import Note from '../screens/notes/note';

const Stack = createStackNavigator();

export default function BookListsStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="BookList" component={BookList}/>
          <Stack.Screen name="Book" component={Book}/>
          <Stack.Screen name="Notes" component={NoteList}/>
          <Stack.Screen name="Note" component={Note}/>
        </Stack.Navigator>
    );
}

  