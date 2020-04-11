import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Images, Strings } from '@assets/index';

export default function cell () {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image source={}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{Strings.Go}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    
  },
  text: {

  },
  progressBar: {

  }
});