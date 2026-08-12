import { useState } from "react";

function TodoForm({ onAddTodo }){

    const [title, setTitle] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!title.trim()){
            return;
        }
        onAddTodo(title);
        setTitle("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Enter a new todo" 
            onChange= {(e) => setTitle(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;