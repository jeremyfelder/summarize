import * as React from 'react';
import Cell from '../components/cell';
//@ts-ignore
import { SectionList, Text, View, StyleSheet } from "react-native";
import { Images } from '../assets';
import { Colors } from '../assets';

export default function Summaries (props: any) {
  // const renderSectionSeparator = (title: string) => {
  //   return (
  //     <Text>{title}</Text>
  //   )
  // }

  const onPress = () => {

  }

  return (
    // <SectionList
    //   sections={props.data}
    //   SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator(title)}
    //   stickySectionHeadersEnabled
    // />
    <View style={styles.container}>
      <Cell 
        bookImage={Images.testImage}
        title={"Give and Take"} 
        percentFinished={0.5}
        onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});