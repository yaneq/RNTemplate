import { connect } from 'react-redux'
import SagasScreenComponent from './sagas-screen.component'
import { loadQuestion } from '../../redux/actions/trivia-actions'

const SagasScreenContainer = connect(
  state => ({
    trivia: state.trivia
  }),
  dispatch => ({
    loadQuestion: () => dispatch(loadQuestion())
  })
)(SagasScreenComponent)

export default SagasScreenContainer
