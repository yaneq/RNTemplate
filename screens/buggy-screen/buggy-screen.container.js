import { BuggyScreenComponent } from './buggy-screen.component'
import { compose, withHandlers, withState } from 'recompose'

const BuggyScreen = compose()(BuggyScreenComponent)

export default BuggyScreen
