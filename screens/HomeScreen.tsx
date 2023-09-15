import { Alert, Text, View } from "react-native";
import { gStyle } from '../styles/styles'
import Loading from "../components/Loading";
import { useEffect, useState } from 'react';
import weatherService from "../services/weatherServices";
import * as Location from 'expo-location';
import { useTypedSelector } from "../hooks/useTypedSelector";
import useGeopositionActions from "../hooks/useGeopositionActions";
import { GeopositionTypes } from "../store/slices/geoposition/geopositionTypes";
import useWeatherActions from "../hooks/useWeatherActions";

const HomeScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const { setGeoposition } = useGeopositionActions();
  const { geoposition } = useTypedSelector(state => state.geoposition);
  const { setCurrentWeather } = useWeatherActions()
  const { currentWeather } = useTypedSelector(state => state.weather);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location: GeopositionTypes = await Location.getCurrentPositionAsync();
      console.log(location)
      setGeoposition(location);
    } catch (error) {
      Alert.alert("Ошибка", "Не могу определить местоположение")
    }

  }

  useEffect(() => {
    getLocation();
  }, []);

  const getWeather = () => {
    setIsloading(true);
    if (geoposition) {
      const lat = geoposition?.coords.latitude;
      const lon = geoposition?.coords.longitude
      weatherService.getCurrentWeather(lat, lon)
        .then(res => setCurrentWeather(res))
        .catch((err) => {
          console.log(err);
          Alert.alert("Error", "Error fetching weather")
        })
        .finally(() => {
          setIsloading(false);
        })
    }
  }

  useEffect(getWeather, [geoposition]);

  if (isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <View
      style={gStyle.main}>
      <Text style={gStyle.text}>
        {currentWeather?.name}
      </Text>
      <Text style={gStyle.text}>
        {geoposition?.coords.latitude}
        {geoposition?.coords.longitude}
      </Text>
      <Text style={gStyle.text}>
        {currentWeather?.main.temp.toFixed(0)}&deg;C
      </Text>
      <Text style={gStyle.text}>
        {currentWeather?.weather[0].main}
      </Text>
    </View>
  )
}

export default HomeScreen;