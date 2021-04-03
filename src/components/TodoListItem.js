import React, {useState} from 'react';

const TodoListItem = ({ todo, deleteTodo, startEditing, finishEditing }) => {
    // let TodoValue = todo.value;
    const [todoValue, setTodoValue] = useState(todo.value);

    const deleteItem = () => {
        deleteTodo(todo.id);
    }

    const startEdit = () => {
        startEditing(todo.id);
    }

    const changeTodoValue = e => {
        // TodoValue = e.target.value;
        setTodoValue(e.target.value);
    }

    const finishEdit = () => {
        // if(TodoValue.trim()) {
        //     todo.value = TodoValue.trim();
        //     todo.isEditing = false;
        //     finishEditing(todo);
        // }

        if(todoValue.trim()) {
            todo.value = todoValue.trim();
            todo.isEditing = false;
            finishEditing(todo);
        }
        
    }

    return (
        <li className="list">
            {todo.isEditing ? (
                <>
                    <textarea className="editTask" defaultValue={todoValue} onChange={changeTodoValue}></textarea>
                    <button className="saveTask" onClick={finishEdit}>Save</button>
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