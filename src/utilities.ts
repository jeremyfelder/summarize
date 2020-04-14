import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';

//@ts-ignore
const isAndroid = Platform.OS === "android"
//@ts-ignore
const isIOS = Platform.OS === "ios"
//@ts-ignore
const semanticVersion = DeviceInfo.getReadableVersion().split(".", 3).join(".")
//@ts-ignore
const isCharging = () => DeviceInfo.isBatteryCharging()
