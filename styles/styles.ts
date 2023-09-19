import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  degree: {
    color: 'white',
    fontSize: 120,
  },
  sunBlock: {
    flexDirection: 'row',
    gap: 30,
  },
  sunBlockInfo: {
    flexDirection: 'row',
    gap: 10,
  },
  sunBlockText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 24,
  },
  weatherCondition: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  weatherDesc: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 18,
  },
  weatherBlock: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    gap: 15,
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: 'rgba(30, 81, 123, 0.2)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  location: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  dailyWeatherTitle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 81, 123, 0.2)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 5,
  },
  dailyWeatherTitleText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  dailyWeatherList: {
    paddingHorizontal: 20,
    width: "100%",
  },
  dailyWeather: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
  },
  dailyWeatherInfo: {
    fontSize: 18,
    color: 'white',
  },
  dailyWeatherDate: {
    color: 'rgba(255,255,255,0.5)'
  },
  searchControl: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 7,
    borderRadius: 12,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
}); 