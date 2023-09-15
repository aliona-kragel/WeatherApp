import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeatherTypes, IWeather } from "./weatherTypes";
const initialState: IWeather = {
  currentWeather: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<CurrentWeatherTypes>) => {
      state.currentWeather = action.payload;
    }
  }
})

export default weatherSlice;