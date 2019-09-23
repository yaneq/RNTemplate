import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home-screen/home-screen.component';
import SimpleScreen from '../screens/simple-screen/simple-screen.component';

const MainNavigator = createStackNavigator({
  Home: HomeScreen,
  Simple: SimpleScreen
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
