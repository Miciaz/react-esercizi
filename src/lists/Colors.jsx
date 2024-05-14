import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <>
      <h1>Lista Colori</h1>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </>
  );
}
