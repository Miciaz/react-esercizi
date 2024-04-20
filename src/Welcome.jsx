export function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}!</strong>
      </p>
      {age > 18 && <Age age={age} />}
      {Boolean(age) && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
    </div>
  );
}

export function Age({ age }) {
  return <p>Your age is {age}</p>;
}
