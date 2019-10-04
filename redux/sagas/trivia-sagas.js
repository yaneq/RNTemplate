import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {TRIVIA_ACTIONS} from '../actions/trivia-actions'
import {fetchTriviaQuestion} from '../../services/trivia-service'
import {receiveQuestion} from '../actions/trivia-actions'

const QUESTIONS = [
  {
    question: 'how many people live in Casa de la Selva?',
    correct_answer: '20000',
    incorrect_answers: ['20', '1000000'],
  },
  {
    question: 'How far is Casa de la Selva from Santa Cruz, Bolivia?',
    correct_answer: '9,377 km',
    incorrect_answers: ['300 km', '1000000 km'],
  },
]

export function* fetchTriviaQuestionGenerator() {
  // TASK 1: Instead of taking the value from the the array, call an api
  // HINT 1: Use function fetchTriviaQuestion
  // HINT 2: Check the documentation for the saga effect 'call'
  yield put(
    receiveQuestion(QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]),
  )
}

function* triviaSagas() {
  // TASK 2: Find a way to avoid multiple simultaneous requests
  yield takeEvery(TRIVIA_ACTIONS.REQUEST_QUESTION, fetchTriviaQuestionGenerator)
}

export default triviaSagas
