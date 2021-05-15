import { useReducer } from 'react';

const initialState = {
  counter: 0,
};

type ActionType =
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    };

const counterReducer = (
  state: typeof initialState,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

const CounterRed = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  console.log(state);
  return (
    <>
      <h2>Contador: {state.counter}</h2>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className='btn btn-info'
      >
        Incrementar
      </button>

      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className='btn btn-info'
      >
        Decrementar
      </button>
    </>
  );
};

export default CounterRed;
