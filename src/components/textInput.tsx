import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import { Colors } from '../assets';

export default function TextInput(props: any) {
  const {placeholder} = props
  const [hasFocus, setHasFocus] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.lightgrey}
        multiline={false}
        keyboardType='default'
        textContentType='none'
        autoCapitalize='none'
        returnKeyType='done'
        autoCorrect={false}
        clearButtonMode='never'
        autoFocus={false}
        selectionColor={Colors.mintcream}
        style={styles.input}
        placeholder={hasFocus ? undefined : placeholder}
        underlineColorAndroid={'transparent'}
        onFocus={() => {
          setHasFocus(true)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginHorizontal: 16
  },
  input: {
    width: '100%'
  }
})