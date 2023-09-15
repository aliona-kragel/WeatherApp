import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import geopositionSlice from "../store/slices/geoposition/geopositionSlice";

const useGeopositionActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(geopositionSlice.actions, dispatch),
    [dispatch]
  )
}

export default useGeopositionActions;