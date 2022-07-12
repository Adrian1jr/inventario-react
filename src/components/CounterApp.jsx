import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  //En el () va el valor inicial que se guarda en counter
  //SetCounter es para cambiar el counter
  const [counter, setCounter] = useState(value);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={handleIncrement}>
        +1
      </button>
      <button type="button" onClick={handleDecrement}>
        -1
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
