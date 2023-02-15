import React from 'react'
import { React, useState } from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import MaxLimit from '../components/MaxLimit';
 
export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [maxCount, setMaxCount] = useState(10);
 
  //increase counter
  const increase = () => {
    if (counter < maxCount) {
      setCounter(counter + 1);
    }
  };
 
  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter_result">{counter}</span>
      <div className="btn_container">
        <button className="control_btn" onClick={increase}>Increment</button>
        <button className="control_btn" onClick={decrease}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
        <MaxLimit maxCount={maxCount} setMaxCount={setMaxCount} />
      </div>
      <Link to='/' className='about-btn'>
        Back Home
      </Link>
    </div>
  );
}
