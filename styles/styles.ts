import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'linear-gradient(189deg, rgba(52,166,240,1) 0%, rgba(97,151,176,1) 35%, rgba(185,210,215,1) 100%)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    blur: true,
  },
}); 