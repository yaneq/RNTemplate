import React from 'react'
import PropTypes from 'prop-types'

import NavigationContainer from './navigation/screens'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/root-reducer'

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware()
    )
  )
  return store
}

const store = configureStore()

const AppContainer = () => (
    <Provider store={store}>
        <NavigationContainer />
    </Provider>
)

export default AppContainer;
