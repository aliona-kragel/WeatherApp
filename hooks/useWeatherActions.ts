import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import weatherSlice from "../store/slices/weather/weatherSlice";

const useWeatherActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(weatherSlice.actions, dispatch),
    [dispatch]
  )
}

export default useWeatherActions;