import { Alert, View } from "react-native";
import { gStyle } from '../styles/styles'
import Loading from "../components/Loading";
import * as Location from 'expo-location';
import { GeopositionTypes } from "../store/slices/geoposition/geopositionTypes";
import CurrentWeather from "../components/CurrentWeather";
import { useEffect, useState } from "react";
import useWeatherActions from "../hooks/useWeatherActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import weatherService from "../services/weatherServices";
import useGeopositionActions from "../hooks/useGeopositionActions";

const HomeScreen = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const { setCurrentWeather } = useWeatherActions();
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

  return (
    <View
      style={gStyle.main}>
      {isLoading ? <Loading /> : <CurrentWeather condition={currentWeather?.weather[0].main} />}
    </View>
  )
}

export default HomeScreen;