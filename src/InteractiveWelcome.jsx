import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  function createData() {
    return {
      name: "",
    };
  }
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const value = event.target.value;

    setData((data) => {
      return {
        ...data,
        name: value,
      };
    });
  }

  return (
    <div>
      <input type="text" value={data.name} onChange={handleInputChange} placeholder="Inserisci il tuo nome"/>
      <Welcome name={data.name} age={12}/>
    </div>
  );
}
