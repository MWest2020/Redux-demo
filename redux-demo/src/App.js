import React from 'react';

import {
  useSelector, 
  useDispatch
} from 'react-redux';

import {
  increment, 
  decrement, 
  custom,
  random, 
  reset
} from './actions';


function App() {
  const counter = useSelector(state => 
    state.counter
  );
  const isLogged = useSelector(state => 
    state.isLogged
  );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>So Hello, much World</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={ () => {dispatch(custom(9))}}>Custom Increase</button>
      <button onClick={ () => {dispatch(random())}}>RANDOM SCORE</button>
      <button onClick={ () => {dispatch(reset())}}>RESET COUNTER</button>
      {isLogged ? <h4>You are logged in</h4> : ''}
    </div>
  );
}

export default App;
