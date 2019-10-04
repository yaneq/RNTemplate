export const fetchTriviaQuestion = () => {
  return fetch('https://opentdb.com/api.php?amount=1')
}
