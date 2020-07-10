import * as React from 'react';
import { StyleSheet, View, SectionList, TouchableHighlight, Text } from 'react-native';
import EmptyNoteList from '../notes/emptyNoteList';
import { CellDivider } from '../../components/cell';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScreenNames } from '../../navigation';
import { deviceWidth } from '../../utilities';

export default function NoteList (props: any) {
  const addNewNote = () => {
    props.navigation.navigate(ScreenNames.NEW_NOTE)
  }

  const renderEmptyState = () => {
    return <EmptyNoteList/>
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={[]}
        ListEmptyComponent={renderEmptyState()}
        ItemSeparatorComponent={CellDivider}
        //renderItem={({ item }) => renderRow(item as CellProps)}
        //SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator()}
        />
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
    backgroundColor: Colors.white
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
})
