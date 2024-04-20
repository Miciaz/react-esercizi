export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}!</strong>
      </p>
      <Age age={age} />
    </div>
  );
}

export function Age({ age }) {
  return <p>Your age is {age}</p>;
}
