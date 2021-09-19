import './App.css';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC} from './actionTypes';
import PropTypes from 'prop-types';

function App({ counter, dispatch }) {
  const action = (type) => () => dispatch({ type });
  return (
    <div className="App">
      Clicked: {counter} times <button onClick={action(INCREMENT)}>+</button>
      <button onClick={action(DECREMENT)}>-</button>
      <button onClick={action(INCREMENT_IF_ODD)}>Increment if odd</button>
      <button onClick={action(INCREMENT_ASYNC)}>Increment async</button>
      <div>Automatic Deploy!</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(App);