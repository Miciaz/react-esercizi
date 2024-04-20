import { HelloWorld, Messagge } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name='Rossella' age={30}/>
      <Messagge />
    </div>
  );
}
