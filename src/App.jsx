import { AlertClock } from "./AlertClock";
import Counter from "./Counter";
import { HelloWorld, Messagge } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name='John' age={15}/>
      <Messagge />
      <AlertClock />
      <hr />
      <Counter />
    </div>
  );
}
