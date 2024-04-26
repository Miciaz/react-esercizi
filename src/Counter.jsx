import { useEffect, useState, useRef } from "react";
import { CounterDisplay } from "./CounterDisplay";

function Counter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  const directionRef = useRef(null);
  const prevCounterRef = useRef(null);
  
  useEffect(() => {
    console.log(`The value of the counter is ${counter}`)
    if (prevCounterRef.current !== null) {
      if (counter > prevCounterRef.current) {
        directionRef.current = 'up';
      } else if (counter < prevCounterRef.current) {
        directionRef.current = 'down';
      }
    }
    prevCounterRef.current = counter;
  }, [counter])

  useEffect(() => {
    if (directionRef.current !== null) {
      console.log(`Direction of change: ${directionRef.current}`);
    }
  }, [directionRef.current]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1)
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1)
  }

  function handleCounterReset() {
    setCounter(initialValue)
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
