import { ActivityIndicator, Text, View } from "react-native";
import { gStyle } from '../styles/styles'


const Loading = () => {
  return (
    <View style={gStyle.loading}>
      <ActivityIndicator size="large" />
      <Text>Weather is loading...</Text>
    </View>
  )
}

export default Loading;