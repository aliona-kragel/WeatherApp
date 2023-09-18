import axios from "axios";
import { CurrentWeatherTypes, FiveDayWeatherTypes } from "../store/slices/weather/weatherTypes";

const apiKey: string = "600e2cd2a746ea7aeb8bed7fa2604dde";

const weatherService = {
  async getCurrentWeather(lat: number | null, lon: number | null): Promise<CurrentWeatherTypes> {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return data;
  },
  async getFiveDayWeather(lat: number | null, lon: number | null): Promise<FiveDayWeatherTypes> {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return data;
  }
}

export default weatherService;