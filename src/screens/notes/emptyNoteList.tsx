import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScreenNames } from '../../navigation';
import { deviceWidth } from '../../utilities';

export default function EmptyNoteList(props: any) {
  const addNewNote = () => {
    props.navigation.navigate(ScreenNames.NEW_NOTE)
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{"Here we are"}</Text>
      <TouchableHighlight 
        style={styles.floatingButton}
        disabled={false}
        onPress={(event) => addNewNote()}
        underlayColor={Colors.lightpink}>
        <Text style={styles.floatingButtonIcon}>+</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText:{
    height: 50,
    width: 250
  },
  floatingButton:{
    width: 60,
    height: 60,
    backgroundColor: Colors.purple,
    borderRadius: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: deviceWidth-90,
    bottom: 30
  },
  floatingButtonIcon: {
    color: Colors.white,
    fontSize: 60,
    paddingBottom: 5
  }
});