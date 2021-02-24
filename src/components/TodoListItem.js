import React from 'react';

const TodoListItem = ({ todo, deleteTodo, startEditing, finishEditing }) => {
    let TodoValue = todo.value;
    const deleteItem = () => {
        deleteTodo(todo.id);
    }

    const startEdit = () => {
        startEditing(todo.id);
    }

    const changeTodoValue = e => {
        TodoValue = e.target.value;
    }

    const finishEdit = () => {
        if(TodoValue.trim()) {
            todo.value = TodoValue.trim();
            todo.isEditing = false;
            finishEditing(todo);
        }
        
    }

    return (
        <li className="list">
            {todo.isEditing ? (
                <>
                    <textarea className="editTask" defaultValue={TodoValue} onChange={changeTodoValue}></textarea>
                    <button className="saveTask" onClick={finishEdit}>Update Todo</button>
                </>

            ) : (
                    <>
                        {todo.value} (<a href="#" onClick={startEdit}>Edit</a> | <a href="#" onClick={deleteItem}>Delete</a>)
                    </>

                )}

        </li>
    );
};

export default TodoListItem;