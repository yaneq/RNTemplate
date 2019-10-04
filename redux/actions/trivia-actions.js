export const TRIVIA_ACTIONS = {
  REQUEST_QUESTION: 'TriviaAction.REQUEST_QUESTION',
  RECEIVE_QUESTION: 'TriviaAction.RECEIVE_QUESTION',
}

export const requestQuestion = () => {
  return {
    type: TRIVIA_ACTIONS.REQUEST_QUESTION,
  }
}

export const receiveQuestion = question => {
  return {
    type: TRIVIA_ACTIONS.RECEIVE_QUESTION,
    payload: question,
  }
}
