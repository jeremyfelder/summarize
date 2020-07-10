import * as React from 'react';
import { TextInput } from '../../components';
import { Strings } from '../../assets';
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function Note (props: any) {
  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={20}>
      <View>
        <Text style={styles.title}>{"New Note Test String"}</Text>
        <TextInput
          placeholder={Strings.exampleTitle}
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
    </KeyboardAvoidingView>
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