import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreenContainer from '../screens/home-screen/home-screen.container'
import SimpleScreenContainer from '../screens/simple-screen/simple-screen.container'
import ReduxScreenContainer from '../screens/redux-screen/redux-screen.container'
import SagasScreenContainer from '../screens/sagas-screen/sagas-screen.container'
import ErrorScreenContainer from '../screens/error-screen/error-screen.container'
import BuggyScreenContainer from '../screens/buggy-screen/buggy-screen.container'

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreenContainer,
    SimpleScreen: SimpleScreenContainer,
    ReduxScreen: ReduxScreenContainer,
    SagasScreen: SagasScreenContainer,
    ErrorScreen: ErrorScreenContainer,
    BuggyScreen: BuggyScreenContainer,
  },
  { initialRouteName: 'HomeScreen' },
)

const NavigationContainer = createAppContainer(RootStack)

export default NavigationContainer
