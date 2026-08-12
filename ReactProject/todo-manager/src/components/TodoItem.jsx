

function TodoItem({todo, onToggle, onDelete}){
    return(
        <div className="todo-item">
            <div>
                <input type="checkbox" checked={todo.completed}
                onChange={ () => onToggle(todo.id)}/>
                <span className = {todo.completed ? "completed" : ""}>{todo.title}</span>
            </div>

            <button onClick={ ()=> onDelete(todo.id)}>Delete </button>
        </div>
    );
}

export default TodoItem;