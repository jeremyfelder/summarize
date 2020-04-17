import * as React from 'react';
import { SectionList, Text, View, StyleSheet, ShadowPropTypesIOS } from "react-native";
import { Colors, Images } from '../../assets';
import { Divider } from 'react-native-elements';
import Cell, { CellProps, CellDivider } from '../../components/cell';
import EmptyBooks from './emptyBooks';

export default function Books (props: any) {
  const renderItem = (item: CellProps) => {
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

  const renderSectionSeparator = (title: string) => {
    return (
      <Divider style={{ height: 0.5, backgroundColor: Colors.blue }}/>
    )
  }

  const data = [];
  if(props.currentlyReading) data.push({
    'title': 'Currently Reading',
    data: props.currentlyReading
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
    <SectionList
      sections={data}
      ListEmptyComponent={EmptyBooks}
      ItemSeparatorComponent={CellDivider}
      renderItem={({ item }) => renderItem(item as CellProps)}
      renderSectionHeader={({ section: { title }}) => renderSectionHeader(title)}
      SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator(title)}
      stickySectionHeadersEnabled
    />
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
  }
});