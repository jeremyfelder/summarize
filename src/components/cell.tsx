import * as React from 'react';
import { View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Colors } from '../assets/';
import * as Progress from 'react-native-progress';
import { Divider } from 'react-native-elements';

export interface CellProps {
  title: string;
  icon?: ImageSourcePropType;
  percentFinished?: number;
  onPress?: () => void;
}

export function CellDivider() {
  return (
    <View>
      <Divider style={{ height: 0.5, backgroundColor: Colors.lightgrey, marginLeft: 16 }}/>
    </View>
  )
}

export default function Cell (props: any) {
  const { icon, title, percentFinished, onPress } = props
  return (
    <TouchableHighlight
      disabled={!onPress}
      onPress={onPress}
    >
      <View style={styles.container}>
        {icon && <Image style={styles.icon} source={icon}/> }
        <View style={styles.middleContainer}>
          <Text style={styles.text}>{title}</Text>
          {percentFinished && <Progress.Bar 
            style={styles.progressBar} 
            progress={percentFinished} 
            unfilledColor={Colors.slategrey} 
            color={Colors.green}
            borderWidth={0}
            // width={null}
            height={10}
            borderRadius={6}/>}
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 54,
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
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  progressBar: {

  }
});
