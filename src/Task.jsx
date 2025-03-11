
import { useState } from 'react';

const Task = () => {

    let [todo, setTodo] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodo([...todo, newTodo]);
        setNewTodo("");
    }
    let updateTodo = (event) =>{
        
        setNewTodo(event.target.value);
    }
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={newTodo} onChange={updateTodo}/>
        <br /><br /><hr />
        <button onClick={addNewTask}>Submit</button>
        <ul>
            {todo.map((todos) =>{
                return <li>{todos}</li>
            })}
        </ul>
    </div>
  )
}

export default Task