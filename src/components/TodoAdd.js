import React from 'react';

function TodoAdd({addTodo}) {
    let TodoValue = "";
    const submitTodo = () => {
        if(TodoValue.trim()) {
            addTodo(TodoValue.trim());
            TodoValue = "";
            document.getElementById("task").value = "";
        }
    }

    const updateTodoValue = e => {
        TodoValue = e.target.value;
        
    }
    return (
        <div>
            <textarea id="task" onChange={updateTodoValue}></textarea>
            <br/>
            <button id="btn" onClick={submitTodo}>Add New</button>
        </div>
    );
}

export default TodoAdd;