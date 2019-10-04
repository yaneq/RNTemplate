import {TRIVIA_ACTIONS} from '../actions/trivia-actions'

const initialState = {
  question: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIVIA_ACTIONS.REQUEST_QUESTION:
      return {
        ...state,
        loading: true,
      }

    case TRIVIA_ACTIONS.RECEIVE_QUESTION:
      return {
        ...state,
        question: action.payload,
      }

    default:
      return state
  }
}
