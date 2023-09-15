import { configureStore } from "@reduxjs/toolkit";
import geopositionSlice from "./slices/geoposition/geopositionSlice";
import weatherSlice from "./slices/weather/weatherSlice";


const store = configureStore({
  reducer: {
    geoposition: geopositionSlice.reducer,
    weather: weatherSlice.reducer
  }
})

export default store;

export type TypeRootState = ReturnType<typeof store.getState>