import { combineReducers } from 'redux'
import UserReducer from './user-reducer'
import TriviaReducer from './trivia-reducer'

const ReducerFactory = combineReducers({
    user: UserReducer,
    trivia: TriviaReducer
})

export default ReducerFactory
