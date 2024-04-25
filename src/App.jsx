import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import Counter from "./Counter";
import { Messagge } from "./HelloWorld";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name='John' age={15}/>
      <Messagge />
      <AlertClock />
      <hr />
      <Counter />
      <hr />
      <Clock />
      <hr />
      <MouseClicker />
      <hr />
      <Login /> 
      <hr />
      <UncontrolledLogin />
    </div>
  );
}
