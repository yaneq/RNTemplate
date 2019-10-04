import React from 'react'
import PropTypes from 'prop-types'

import NavigationContainer from './navigation/screens'
import {Provider} from 'react-redux'
import configureStore from './redux/configure-store'

const store = configureStore()

const AppContainer = () => (
  <Provider store={store}>
    <NavigationContainer />
  </Provider>
)

export default AppContainer
