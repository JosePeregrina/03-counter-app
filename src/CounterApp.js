import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  
  const [ counter, setCounter ] = useState(value);

  // handleAdd
  const handleAdd = (e) => {
    // Add one to the counter
    setCounter( (counter)=> counter + 1 )
  };

  const handleReset = () => {
    //Return the counter to its otiginal value
    setCounter(value)
  }

  const hanldeSubstract = () => {
    //Substract one to the counter
    setCounter((counter) => counter - 1 )
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={hanldeSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
