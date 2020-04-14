import * as React from 'react';
import Cell from '../components/cell';
import { SectionList, Text, View, StyleSheet } from "react-native";
import { Images } from '@assets/index';
import { Colors } from '@assets/index';

export default function Summaries (props: any) {
  // const renderSectionSeparator = (title: string) => {
  //   return (
  //     <Text>{title}</Text>
  //   )
  // }

  return (
    // <SectionList
    //   sections={props.data}
    //   SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator(title)}
    //   stickySectionHeadersEnabled
    // />
    <View style={styles.container}>
      <Cell bookImage={Images.testImage} title={"Test Title"} percentFinished={50}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whitesmoke
  }
});