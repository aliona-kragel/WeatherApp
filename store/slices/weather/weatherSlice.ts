import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeatherTypes, IWeather, FiveDayWeatherTypes } from "./weatherTypes";

const initialState: IWeather = {
  currentWeather: null,
  fiveDayWeather: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<CurrentWeatherTypes>) => {
      state.currentWeather = action.payload;
    },
    setFiveDayWeather: (state, action: PayloadAction<FiveDayWeatherTypes>) => {
      state.fiveDayWeather = action.payload;
    }
  }
})

export default weatherSlice;