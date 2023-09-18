import { Alert, View } from "react-native";
import { gStyle } from '../styles/styles'
import Loading from "../components/Loading";
import * as Location from 'expo-location';
import { GeopositionTypes } from "../store/slices/geoposition/geopositionTypes";
import { useEffect, useState } from "react";
import useWeatherActions from "../hooks/useWeatherActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import weatherService from "../services/weatherServices";
import useGeopositionActions from "../hooks/useGeopositionActions";
import WeatherForecast from "../components/WeatherForecast";


const HomeScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const { setCurrentWeather, setFiveDayWeather } = useWeatherActions();
  const { setGeoposition } = useGeopositionActions();
  const { geoposition } = useTypedSelector(state => state.geoposition);
  const { currentWeather } = useTypedSelector(state => state.weather);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const location: GeopositionTypes = await Location.getCurrentPositionAsync();
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
      const lon = geoposition?.coords.longitude;
      weatherService.getCurrentWeather(lat, lon)
        .then(res => setCurrentWeather(res))
        .catch((err) => {
          console.log(err);
          Alert.alert("Error", "Error fetching weather")
        })
        .finally(() => {
          setIsloading(false);
        });
      weatherService.getFiveDayWeather(lat, lon)
        .then(res => setFiveDayWeather(res))
        .catch((err) => {
          console.log(err);
          Alert.alert("Error", "Error fetching 5 day weather")
        })
        .finally(() => {
          setIsloading(false);
        });
    }
  }

  useEffect(getWeather, [geoposition]);

  return (
    <View
      style={gStyle.main}>
      {isLoading ? <Loading /> : <WeatherForecast condition={currentWeather?.weather[0].main} />}
    </View>
  )
}

export default HomeScreen;