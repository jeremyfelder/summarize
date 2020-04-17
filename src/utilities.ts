import { Dimensions, Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

//@ts-ignore
export const isAndroid = Platform.OS === "android"
//@ts-ignore
export const isIOS = Platform.OS === "ios"
//@ts-ignore
export const semanticVersion = DeviceInfo.getReadableVersion().split(".", 3).join(".")
//@ts-ignore
export const isCharging = () => DeviceInfo.isBatteryCharging()
export const deviceHeight = Dimensions.get('window').height;
//@ts-ignore
export const deviceWidth = Dimensions.get('window').width;