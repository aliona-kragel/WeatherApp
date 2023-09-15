import { ActivityIndicator, Text, View } from "react-native";
import { gStyle } from '../styles/styles'
import { StatusBar } from "expo-status-bar";


const Loading = () => {
  return (
    <View style={gStyle.loading}>
      <StatusBar style="dark" />
      <ActivityIndicator size="large" />
      <Text>Weather is loading...</Text>
    </View>
  )
}

export default Loading;