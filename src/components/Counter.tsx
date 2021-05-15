import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (num: number = 1): void => {
    setCounter(counter + num);
  };

  const handleDecrement = (num: number = 1): void => {
    setCounter(counter - num);
  };

  return (
    <div className='mt-5'>
      <h4>Counter</h4>
      <p>Valor: {counter}</p>
      <button
        onClick={() => handleIncrement(1)}
        className='btn btn-primary mt-3 me-5'
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement(1)}
        className='btn btn-primary mt-3'
      >
        Decrement
      </button>
      <button
        onClick={() => setCounter(0)}
        className='btn btn-danger mt-3 ms-5'
      >
        Reset
      </button>
      <hr />
    </div>
  );
};

export default Counter;
