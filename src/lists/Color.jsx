export function Color({ items }) {
    return (
      <>
        <h2>Colors list</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }
