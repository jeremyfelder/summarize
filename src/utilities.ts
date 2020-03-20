import { Platform } from "react-native";
import DeviceInfo from 'react-native-device-info';


const isAndroid = Platform.OS === "android"
const isIOS = Platform.OS === "ios"

const semanticVersion = DeviceInfo.getReadableVersion().split(".", 3).join(".")
const isCharging = () => DeviceInfo.isBatteryCharging()
