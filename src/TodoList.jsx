import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  
  let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    setTodos((previous)=>{
      return [...previous, {task: newTodo, id: uuidv4()}]
    })
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) =>{
    // let newValue = todos.filter((todo) => todo.id != id);
    // console.log(newValue);
    setTodos(()=> (todos.filter((previous) => previous.id != id)))
  }
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
          <li key={todo.id}>
            <span>{todo.task}</span>
             &nbsp; &nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
      </ul>
     
    </div>
  );
};

export default TodoList;