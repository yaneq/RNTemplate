import {SimpleScreenComponent} from './simple-screen.component';
import {compose, withHandlers, withState} from 'recompose';
import {updateColor} from './simple-screen.handlers';

const SimpleScreen = compose(
  withState('color', 'setColor', 'red'),
  withHandlers({
    changeColor: ({setColor}) => () => updateColor(setColor),
  }),
)(SimpleScreenComponent);

export default SimpleScreen;
