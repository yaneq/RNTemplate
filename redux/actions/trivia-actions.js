export const TRIVIA_ACTIONS = {
  LOAD_QUESTION: 'TriviaAction.LOAD'
}

export const loadQuestion = () => {
  return {
    type: TRIVIA_ACTIONS.LOAD_QUESTION
  }
}
