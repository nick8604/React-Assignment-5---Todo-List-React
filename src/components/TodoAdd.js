import React, { useState } from 'react';
import '../styles/TodoAdd.css'

function TodoAdd({addTodo}) {
    // let TodoValue = "";
    const [todoValue, setTodoValue] = useState("");
    const submitTodo = () => {
        // if(TodoValue.trim()) {
        //     addTodo(TodoValue.trim());
        //     TodoValue = "";
        //     document.getElementById("task").value = "";
        // }

        if(todoValue.trim()) {
            addTodo(todoValue.trim());
            setTodoValue("");
        }
    }

    const updateTodoValue = e => {
        // TodoValue = e.target.value;
        setTodoValue(e.target.value)
        
    }
    return (
        <div className="grid-container">
            <textarea id="task" onChange={updateTodoValue} value={todoValue}></textarea>
            <br/>
            <button id="btn" onClick={submitTodo}>Add New</button>
        </div>
    );
}

export default TodoAdd;