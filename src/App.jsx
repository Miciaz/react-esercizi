import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Color } from "./Color";
import Counter from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { Messagge } from "./HelloWorld";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { ToDoList } from "./ToDoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name="John" age={15} />
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
      <hr />
      <FocusableInput />
      <hr />
      <Color
        items={[
          { id: 1, name: "green" },
          { id: 2, name: "yellow" },
          { id: 3, name: "red" },
          { id: 4, name: "blue" },
          { id: 5, name: "black" },
        ]}
      />
      <hr />
      <ToDoList />
    </div>
  );
}
