import { useState } from "react";
import classes from "./ToDoList.module.scss";

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
      <form className={classes.form} action="submit" onSubmit={handleSubmit}>
        <input
            className={classes.input}
          type="text"
          placeholder="Add your todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button className={classes.button} type="submit">Add ToDo!</button>
        <button className={classes.button} onClick={handleReset}>Reset ToDo list</button>
      </form>

      <ul className={classes.list}>
        {todo.map((el, index) => (
          <li className={classes.list-item} key={index}>{el}
          <button className={classes.button} onClick={() => handleRemove(index)}>Remove</button></li>
        ))}
      </ul>
    </>
  );
}
