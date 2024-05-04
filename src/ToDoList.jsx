import { useState } from "react";

export function ToDoList() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodo([...todo, newTodo]);
    setNewTodo("");
  }

  function handleReset() {
    setTodo([])
  }

  function handleRemove(index) {
    setTodo(todo.filter((el, i) => i !== index));
  }

  return (
    <>
      <h2>ToDo List</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add ToDo!</button>
        <button onClick={handleReset}>Reset ToDo list</button>
      </form>

      <ul>
        {todo.map((el, index) => (
          <li key={index}>{el}
          <button onClick={() => handleRemove(index)}>Remove</button></li>
        ))}
      </ul>
    </>
  );
}
