import { AlertClock } from "./AlertClock";
import { HelloWorld, Messagge } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name='John' age={15}/>
      <Messagge />
      <AlertClock />
    </div>
  );
}
