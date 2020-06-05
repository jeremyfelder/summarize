import * as React from 'react';
import { TextInput } from "react-native-gesture-handler";
import { Strings } from "../../assets/";
import { View, Text, StyleSheet } from "react-native";

export default function NewBook (props: any) {
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
    </View>
  )
}

const styles = StyleSheet.create({
  title: {

  },
  author: {

  }
})