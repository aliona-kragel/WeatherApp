import { Text, View } from "react-native";
import PropTypes from 'prop-types';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { gStyle } from "../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC, PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { weatherOptions } from "../helpers/weatherOptions";
import { StatusBar } from "expo-status-bar";

const CurrentWeather: FC<PropsWithChildren<any>> = ({ condition }) => {
  const { currentWeather } = useTypedSelector(state => state.weather);

  return (
    <LinearGradient
      style={gStyle.weatherBlock}
      colors={weatherOptions[condition].gradient}>
      <View style={gStyle.currentWeather}>
        <View style={gStyle.location}>
          <Ionicons name="location-sharp" size={24} color="white" />
          <Text style={gStyle.text}>
            {currentWeather?.name}
          </Text>
        </View>
        <Text style={gStyle.text}>
          {currentWeather?.main.temp.toFixed(0)}&deg;C
        </Text>
        <View>
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={24} color="white" />
          <Text style={gStyle.text}>
            {currentWeather?.weather[0].main}
          </Text>
        </View>
      </View>
      <StatusBar style='light' />
    </LinearGradient>
  )
}

CurrentWeather.propTypes = {
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Clear', 'Clouds', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado']).isRequired
}

export default CurrentWeather;