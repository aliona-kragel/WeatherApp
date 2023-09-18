import { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { gStyle } from "../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherOptions } from "../helpers/weatherOptions";
import PropTypes from 'prop-types';

interface DailyWeatherPropsTypes {
  date: string,
  tempMin: number,
  weatherCondition: string,
}

const DailyWeather: FC<PropsWithChildren<DailyWeatherPropsTypes>> = ({ date, tempMin, weatherCondition }) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(date);
  const dayName = weekDays[d.getDay()];
  return (
    <View style={gStyle.dailyWeather}>
      <Text style={gStyle.dailyWeatherInfo}>
        {dayName}
      </Text>
      <MaterialCommunityIcons name={weatherOptions[weatherCondition].iconName} size={32} color="white" />
      <Text style={gStyle.dailyWeatherInfo}>
        {tempMin.toFixed(0)}&deg;C
      </Text>
    </View>
  )
}

export default DailyWeather;

DailyWeather.propTypes = {
  weatherCondition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Clear', 'Clouds', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado']).isRequired,
}