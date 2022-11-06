import React, { useReducer } from "react";
import {Link} from 'react-router-dom'

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

function reducer(state, action) {
  console.log("reducer function");
  console.log(`action:${action.type}`);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

export default function ReducerCount() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    console.log("increment");
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    console.log("decrement");
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function resetCount() {
    console.log("resetCount");
    dispatch({ type: ACTIONS.RESET });
  }
  return (
    <div className="counter">
      <h1>React useReducer Counter</h1>
      <span className="counter_result">{state.count}</span>
      <div className="btn_container">
        <button className="control_btn" onClick={increment}>Increment</button>
        <button className="control_btn" onClick={decrement}>Decrement</button>
        <button className="reset" onClick={resetCount}>Reset</button>
      </div>
      <Link to='/' className='about-btn'>
        Back Home
      </Link>
    </div>
  );
}

