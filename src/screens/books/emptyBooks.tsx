import * as React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { Images } from "../../assets/index";

export default function EmptyBooks() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.testImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    height: 400,
    width: 250,
    marginTop: '30%'
  }
});