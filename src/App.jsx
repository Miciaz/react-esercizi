import { Container } from "./Component-composition/Container";
import { Welcome } from './Welcome'
import { AlertClock } from './AlertClock'
import Counter from './State-2_Refs/Counter'
import { Clock } from './Clock'
import { MouseClicker } from './Handling-event/MouseClicker'
import { Login } from './Controlled-form/Login'
import { UncontrolledLogin } from "./uncontrolled-form/UncontrolledLogin";
import { FocusableInput } from './State-2_Refs/FocusableInput'
import { Color } from './lists/Color'
import { ToDoList } from "./List-and-State/ToDoList";

export function App() {
  return (
    <Container title={<h1>App Container</h1>}>
      <Welcome name="John" age={15} />
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
    </Container>
  );
}
