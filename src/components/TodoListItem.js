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
                        {todo.value} <button className="edit" onClick={startEdit}>Edit</button> | <button className="delete" onClick={deleteItem}>Delete</button>
                    </>

                )}

        </li>
    );
};

export default TodoListItem;