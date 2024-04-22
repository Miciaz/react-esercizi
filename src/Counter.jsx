import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    setCounter((c) => c + 1)
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1)
  }

  function handleCounterReset() {
    setCounter(0)
  }

  return (
    <div>
      <CounterDisplay count={counter}/>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}

export default Counter;
