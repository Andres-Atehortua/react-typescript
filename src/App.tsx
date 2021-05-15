import Counter from './components/Counter';
import CounterRed from './components/CounterRed';
import TimerFather from './components/TimerFather';
import Usuario from './components/User';

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <h2>useState</h2>
      <Counter />
      <Usuario />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerFather />

      <h2>useReducer</h2>
      <hr />
      <CounterRed />
    </>
  );
}

export default App;
