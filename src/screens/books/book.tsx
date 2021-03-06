import * as React from 'react';
import { TextInput } from "react-native-gesture-handler";
import { Strings } from "../../assets";
import { View, Text, StyleSheet } from "react-native";

export default function Book (props: any) {
  return (
    <View>
      <Text style={styles.title}>{Strings.Title}</Text>
      <TextInput
        defaultValue={Strings.exampleTitle}
      />
      <Text style={styles.author}>{Strings.Author}</Text>
      <TextInput
        defaultValue={Strings.exampleAuthor}
      />
      <Text style={styles.pages}>{Strings.NumPages}</Text>
      <TextInput
        defaultValue={Strings.exampleNumPages}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {

  },
  author: {

  },
  pages: {

  },
})