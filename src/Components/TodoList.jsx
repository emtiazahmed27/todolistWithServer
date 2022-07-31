import React, { useEffect } from "react";

function TodoList(props) {

    const editHandler = (id) => {
        const tobeEdited = props.todoList.find((todo) => todo.id === id);
        props.setTodoTitle(tobeEdited.title);


        props.setEditable(true);
        props.setEditableTodo(tobeEdited);
    }

    const deleteHandler = (id) => {

        // const newTodoList = props.todoList.filter((todo) => todo.id != id);
        // props.setTodoList(newTodoList);

        fetch(`http://localhost:3000/name/${id}`, {
            method: "DELETE"
        }).then(() => props.getData())
    };

    useEffect(() => {
        props.getData();
    }, [])

    return (
        <div className="todolist">
            <h3>Todo List</h3>
            <ul>
                {props.isLoading && <p>Loading...</p>}
                {props.todoList.map((todo) => (
                    <li>
                        <span>{todo.title}</span>
                        <button
                            id="edit"
                            onClick={() => {
                                editHandler(todo.id);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            id="del"
                            onClick={() => {
                                deleteHandler(todo.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
                {props.errMsg && <p>{props.errMsg}</p>}
            </ul>
        </div>
    );
}

export default TodoList;
