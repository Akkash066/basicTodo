import React from "react";
import { useState } from "react";

const TodoList = () => {
  
  let [todos, setTodos] = useState(["testing"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <h3>To do app</h3>
      <input
        type="text"
        value={newTodo}
        onChange={updateTodoValue}
        placeholder="add a task"
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add task</button>
      <br />
      <br />
      <hr />
      <h5>todo list</h5>
      <ul>chatting with ai</ul>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
