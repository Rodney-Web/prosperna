import StackNavigator from './src/navigation/StackNavigator';
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/redux/store';
import { Provider } from './src/context/ProductContext'

export default function App() {
  return (
    <ReduxProvider store={store}>
    <Provider>
    <StackNavigator/>
    </Provider>
    </ReduxProvider>
  );
}
