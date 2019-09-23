import { connect } from 'react-redux'
import ReduxScreenComponent from './redux-screen.component'
import { login } from '../../redux/actions/user-actions'

const ReduxScreenContainer = connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    login: () => dispatch(login())
  })
)(ReduxScreenComponent)

export default ReduxScreenContainer
