import { HelloWorld, Messagge } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name='John' age={38}/>
      <Messagge />
    </div>
  );
}
