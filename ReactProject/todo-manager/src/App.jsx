import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";


function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false }, 
    { id: 2, title: "Practice useState", completed: true }
  ]);

  const [filter, setFilter] = useState("all");

  //add a new todo
  const addTodo = (title) =>{
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTodos((prevTodos)=> [...prevTodos, newTodo]);
  };

  //toggle todo

  const toggleTodo = (id) =>{
    setTodos((prevTodos) =>prevTodos.map((todo) =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
  )
);
}

// delete todo

const deleteTodo = (id) =>{
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

// filter todos

const filteredTodos = todos.filter((todo) =>{
  
  if(filter === "completed"){
    return todo.completed;
  }
  
  if(filter === "pending"){
    return !todo.completed;

  }
  return true;
});

// counts

const total = todos.length;

const completed = todos.filter((todo) => todo.completed).length;

const pending = total - completed;

return( 
  <div className="app">
    <h1>Todo Manager</h1>
    // form 

    <TodoForm onAddTodo= {addTodo}/>

    //counts
    <div>
      <strong>{total}</strong>
      <span> Total </span>
    </div>

    <div>
      <strong>{pending}</strong>
    </div>

    <div>
      <strong>{completed}</strong>
      <span> Completed </span>
    </div>

    //filter 

    <div className="filter">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")} > All </button>
      <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>Pending</button>
      <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completed</button>
    </div>

    // todo list

    <TodoList
    todos={filteredTodos}
    onToggle={toggleTodo}
    onDelete={deleteTodo}
    />
  </div>
);

}
  

export default App;