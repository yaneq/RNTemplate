import {connect} from 'react-redux'
import {SagasScreenComponent} from './sagas-screen.component'
import {requestQuestion} from '../../redux/actions/trivia-actions'
import {compose, withHandlers, withState} from 'recompose'

const SagasScreenContainer = compose(
  connect(
    state => ({
      trivia: state.trivia,
    }),
    dispatch => ({
      requestQuestion: () => dispatch(requestQuestion()),
    }),
  ),
)(SagasScreenComponent)

export default SagasScreenContainer
