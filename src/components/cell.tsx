import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from '@assets/index';
import * as Progress from 'react-native-progress';


export default function Cell (props: any) {
  const { bookImage, title, percentFinished} = props
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image source={bookImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Progress.Bar progress={percentFinished} unfilledColor={Colors.lightgrey} color={Colors.green}/>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.black
  },
  textContainer: {
    
  },
  text: {

  },
  progressBar: {

  }
});