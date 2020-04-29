import * as React from 'react';
import { StyleSheet, SectionList, View, Text } from "react-native";
import Cell, { CellProps, CellDivider } from '../../components/cell';
import { Colors, Strings, Images } from '../../assets/index';
import { Divider } from 'react-native-elements';
import { semanticVersion } from '../../utilities';

export default function Account(this: any, props: any) {
  const defaultHeadData = [
    
  ]
  const aboutData = [
    {
      title: Strings.privacyPolicy,
      onPress: () => {},
    },
    {
      title: Strings.termsOfUse,
      onPress: () => {},
    }
  ]
  const renderRow = (item: CellProps) => {
    return (
      <Cell {...item}/>
    )
  }

  const renderSectionSeparator = () => {
    return (
      <Divider style={{ height: 0.5, backgroundColor: Colors.lightgrey }}/>
    )
  }

  const renderSectionFooter = () => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version {semanticVersion}</Text>
      </View>
    )
  }

  const sections: any = [
    {
      title: Strings.about,
      data: aboutData
    }
  ];

  return (
    <SectionList
      sections={sections}
      ItemSeparatorComponent={CellDivider}
      renderItem={({ item }) => renderRow(item as CellProps)}
      ListFooterComponent={() => renderSectionFooter()}
      SectionSeparatorComponent={({ section: { title } }) => renderSectionSeparator()} //Needed ???
    />
  )
}

const styles = StyleSheet.create({
  container: {

  },
  footer: {
    height: 54,
    justifyContent: 'center'
  },
  footerText: {
    textAlign: 'left',
    color: Colors.grey,
    fontSize: 15,
    paddingLeft: 16
  }
})
