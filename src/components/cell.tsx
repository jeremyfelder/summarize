import * as React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from '../assets/';
import * as Progress from 'react-native-progress';

export default function Cell (props: any) {
  const { bookImage, title, percentFinished, onPress } = props
  return (
    <TouchableHighlight
      disabled={!onPress}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.icon} source={bookImage}/>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>{title}</Text>
          <Progress.Bar 
            style={styles.progressBar} 
            progress={percentFinished} 
            unfilledColor={Colors.black} 
            color={Colors.green}
            borderWidth={0}
            // width={null}
            height={10}
            borderRadius={6}/>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.whitesmoke
  },
  icon: {
    marginLeft: 16,
    width: 50,
    height: '80%'
  },
  middleContainer: {
    marginLeft: 16,
    height: '80%',
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    paddingBottom: 10
  },
  progressBar: {

  }
});