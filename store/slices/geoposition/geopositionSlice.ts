import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeopositionTypes, ILocations } from "./geopositionTypes";
const initialState: ILocations = {
  geoposition: null,
}

const geopositionSlice = createSlice({
  name: 'geoposition',
  initialState,
  reducers: {
    setGeoposition: (state, action: PayloadAction<GeopositionTypes>) => {
      state.geoposition = action.payload;
    }
  }
})

export default geopositionSlice;