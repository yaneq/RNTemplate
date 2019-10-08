import { all } from 'redux-saga/effects'
import { watchForErrors } from '../screens/error-modal'
import { watchForQuestionRequests } from './sagas/trivia-sagas'

export function* rootSaga() {
  yield all([watchForErrors(), watchForQuestionRequests()])
}
