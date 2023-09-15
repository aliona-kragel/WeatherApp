export interface ILocations {
  geoposition: GeopositionTypes | null
}

export interface GeopositionTypes {
  coords: {
    accuracy: number | null,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    longitude: number | null,
    latitude: number | null,
    speed: number | null
  }
}