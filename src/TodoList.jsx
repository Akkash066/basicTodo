import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  
  let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(),isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  // previousTodo.map((todo) =>{
  //   return{
  //     ...todo,
  //     task: todo.task.toUpperCase(),
  //   }

  

  let addNewTask = () => {
    // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
    setTodos((previous)=>{
      return [...previous, {task: newTodo, id: uuidv4(), isDone: false}]
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

  let upperCaseAll = () => {
    setTodos((previousTodo) => (
      previousTodo.map((todo) =>{
        return{
          ...todo,
          task: todo.task.toUpperCase(),
        }
      })
    ));
  }

  let upperCaseOne = (event) => {
    setTodos((previousTodo) => (
      previousTodo.map((todo) =>{
        if(todo.id == event){
          return{
            ...todo,
            task: todo.task.toUpperCase(),
          }
        }else{
          return todo;
        }
       
      })
    ))
  }

  let isDoneFunction = (id) =>{
    setTodos((previous) =>(
      previous.map((todo) =>{
        if(todo.id == id) {
          return {
            ...todo,
            isDone: true,
          }
        }else {
          return todo;
        }
      })
    ))
  } 

  let isDoneAll = () =>{
    setTodos((previous) => (
      previous.map((todo) => {
          return {
            ...todo, 
            isDone: true,
          }
      
      })
    ))
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
            <span style={todo.isDone ? {textDecorationLine: "line-through" } : {}} >{todo.task}</span>
             &nbsp; &nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>upperCaseOne(todo.id)}>Uppercase one</button>
            <button onClick={()=>isDoneFunction(todo.id)} >Done</button>
            </li>
        ))}
      </ul>
      <br />
     <button onClick={upperCaseAll}>Uppercase All</button>
     <button onClick={isDoneAll}>Mark as done all</button>
    </div>
  );
};

export default TodoList;