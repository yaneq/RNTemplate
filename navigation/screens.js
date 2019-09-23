import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home-screen/home-screen.component';
import SimpleScreen from '../screens/simple-screen/simple-screen.container';
import ReduxScreen from '../screens/redux-screen/redux-screen.container';
import SagasScreen from '../screens/sagas-screen/sagas-screen.container';

const Navigation = createStackNavigator({
  Home: HomeScreen,
  Simple: SimpleScreen,
  Redux: ReduxScreen,
  Sagas: SagasScreen,
});

const NavigationContainer = createAppContainer(Navigation);

export default NavigationContainer;
