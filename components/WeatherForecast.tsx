import { FlatList, Text, View } from "react-native";
import PropTypes from 'prop-types';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { gStyle } from "../styles/styles";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FC, PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { weatherConditions, weatherOptions } from "../helpers/weatherOptions";
import { StatusBar } from "expo-status-bar";
import DailyWeather from "./DailyWeather";
import SearchControl from "./SearchControl";
import { getCapitalizedStr, timeConverter } from "../helpers/helpers";
import SunCycleInfo from "./SunCycleInfo";

const WeatherForecast: FC<PropsWithChildren<any>> = ({ condition }) => {
  const { currentWeather, fiveDayWeather } = useTypedSelector(state => state.weather);
  const sunrise = timeConverter(currentWeather.sys.sunrise);
  const sunset = timeConverter(currentWeather.sys.sunset);
  const weatherDesc = getCapitalizedStr(currentWeather.weather[0].description)

  return (
    <LinearGradient
      style={gStyle.weatherBlock}
      colors={weatherOptions[condition].gradient}>
      <SearchControl />
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
        <View style={gStyle.weatherCondition}>
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={48} color={weatherOptions[condition].color} />
          <Text style={gStyle.text}>
            {currentWeather?.weather[0].main}
          </Text>
        </View>
        <Text style={gStyle.weatherDesc}>
          {weatherDesc}
        </Text>
        <View style={gStyle.sunBlock}>
          <SunCycleInfo iconName="sunrise" sunInfo={sunrise} />
          <SunCycleInfo iconName="sunset" sunInfo={sunset} />
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
            <DailyWeather key={item.weather[0].id} date={item.dt_txt} tempMin={item.main.temp_min} weatherCondition={item.weather[0].main} />
          )}
        />
      </View>
      <StatusBar style='light' />
    </LinearGradient>
  )
}

WeatherForecast.propTypes = {
  condition: PropTypes.oneOf(weatherConditions).isRequired,
}

export default WeatherForecast;