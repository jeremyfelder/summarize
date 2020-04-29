import * as React from 'react';
import { SectionList, Text, View, StyleSheet, Button, Image } from "react-native";
import { Colors, Images } from '../../assets';
import { Divider } from 'react-native-elements';
import Cell, { CellProps, CellDivider } from '../../components/cell';
import EmptyBooks from './emptyBooks';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { deviceWidth, deviceHeight } from '../../../src/utilities';

export default function Books (props: any) {
  const renderRow = (item: CellProps) => {
    return (
      <Cell {...item}/>
    )
  }

  const renderSectionHeader = (title: string) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderTitle}>{title}</Text>
      </View>
    )
  }

  const renderSectionSeparator = () => {
    return (
      <Divider style={{ height: 0.5, backgroundColor: Colors.lightgrey, marginLeft: 16 }}/>
    )
  }

  const data = [];
  if(true) data.push({
    'title': 'Currently Reading',
    data: [
      {
        title: "Thing",
        icon: Images.testImage,
        percentFinished: 0.43
      }
    ]//props.currentlyReading
  })
  if(props.wishList) data.push({
    'title': 'Wish List',
    data: props.wishList
  })
  if(props.completed) data.push({
    'title': 'Completed',
    data: props.completed
  })

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        ListEmptyComponent={EmptyBooks}
        ItemSeparatorComponent={CellDivider}
        renderItem={({ item }) => renderRow(item as CellProps)}
        renderSectionHeader={({ section: { title }}) => renderSectionHeader(title)}
        SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator()}
        stickySectionHeadersEnabled
        />
      <TouchableHighlight 
        style={styles.floatingButton}
        disabled={false}
        onPress={() => {}}
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
  sectionHeaderContainer: {
    height: 54,
    backgroundColor: Colors.skyblue,
    justifyContent: 'center',
    paddingLeft: 10
  },
  sectionHeaderTitle: {
    textAlign: 'left',
    fontSize: 24
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