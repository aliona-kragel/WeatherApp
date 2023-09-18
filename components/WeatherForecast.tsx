import { FlatList, Text, View } from "react-native";
import PropTypes from 'prop-types';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { gStyle } from "../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC, PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { weatherOptions } from "../helpers/weatherOptions";
import { StatusBar } from "expo-status-bar";
import DailyWeather from "./DailyWeather";

const WeatherForecast: FC<PropsWithChildren<any>> = ({ condition }) => {
  const { currentWeather, fiveDayWeather } = useTypedSelector(state => state.weather);
  return (
    <LinearGradient
      style={gStyle.weatherBlock}
      colors={weatherOptions[condition].gradient}>
      <View style={gStyle.weatherContainer}>
        <View style={gStyle.location}>
          <Ionicons name="location-sharp" size={24} color="white" />
          <Text style={gStyle.text}>
            {currentWeather?.name}
          </Text>
        </View>
        <Text style={gStyle.degree}>
          {currentWeather?.main.temp.toFixed(0)}&deg;
        </Text>
        <View style={gStyle.weatherDesc}>
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={48} color="white" />
          <Text style={gStyle.text}>
            {currentWeather?.weather[0].main}
          </Text>
        </View>
        <View style={gStyle.tempBlock}>
          <Text style={gStyle.tempInfo}>
            max.: {fiveDayWeather?.list[0].main.temp_max.toFixed(0)}&deg;
          </Text>
          <Text style={gStyle.tempInfo}>
            min.: {fiveDayWeather?.list[0].main.temp_min.toFixed(0)}&deg;
          </Text>
        </View>
      </View>
      <View style={gStyle.weatherContainer}>
        <View style={gStyle.dailyWeatherTitle}>
          <MaterialCommunityIcons name="calendar-month" size={24} color="white" />
          <Text style={gStyle.dailyWeatherTitleText}> 5 day weather forecast</Text>
        </View>
        <FlatList
          style={gStyle.dailyWeatherList}
          data={fiveDayWeather?.list.filter(data => data.dt_txt.includes("15:00:00"))}
          renderItem={({ item }) => (
            <View>
              <DailyWeather key={item.weather[0].id} date={item.dt_txt} tempMin={item.main.temp_min} weatherCondition={item.weather[0].main} />
            </View>
          )}
        />
      </View>
      <StatusBar style='light' />
    </LinearGradient>
  )
}

WeatherForecast.propTypes = {
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Clear', 'Clouds', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado']).isRequired,
}

export default WeatherForecast;