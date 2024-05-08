import { CounterDisplay } from "../State-2_Refs/CounterDisplay";
import { useCounter } from "./useCounter";

export function HookCounter({ initialValue = 0}) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
