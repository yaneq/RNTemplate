import { TRIVIA_ACTIONS } from '../actions/trivia-actions'

const initialState = {
  question: 'Home many countries are in the EU?',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case TRIVIA_ACTIONS.LOAD:
    return {
      ...state,
      loading: true
    };

  default:
    return state
  }
};
