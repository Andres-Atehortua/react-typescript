import { useState } from 'react';
import Timer from './Timer';

const TimerFather = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  return (
    <>
      <span>Milisegundos {miliseconds}</span>
      <br />
      <button
        onClick={() => setMiliseconds(1000)}
        className='btn btn-outline-success'
      >
        1000
      </button>
      <button
        onClick={() => setMiliseconds(2000)}
        className='btn btn-outline-success ms-4'
      >
        2000
      </button>
      <Timer miliseconds={miliseconds} />
    </>
  );
};

export default TimerFather;
