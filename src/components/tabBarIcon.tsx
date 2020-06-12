import * as React from 'react';
import { View, Image, ImageSourcePropType } from "react-native";

interface tabBarProps {
  activeIcon: ImageSourcePropType;
  nonActiveIcon: ImageSourcePropType;
  focused: boolean;
}

export interface tabBarIconArguments {
  focused: boolean;
  color: string;
  size: number;
}

export default function TabBarIcon (props: tabBarProps) {
  const { focused, activeIcon, nonActiveIcon } = props;
  return (
    <View style={{alignItems: 'center'}}>
      <Image style={{height: 35, width: 30}} source={ focused ? activeIcon : nonActiveIcon }/>
    </View>
  )
}
