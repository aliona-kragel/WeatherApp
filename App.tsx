import HomeScreen from './screens/HomeScreen';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>

  );
}


