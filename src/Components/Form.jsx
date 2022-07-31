import React from "react";

function Form(props) {

    //createHandler
    const createHandler = (event) => {
        event.preventDefault();

        if (props.todoTitle) {
            const newTodo = {
                id: Date.now() + "",
                title: props.todoTitle,
            };
            fetch(`http://localhost:3000/name`, {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => { props.getData() })
            // props.setTodoList([newTodo, ...props.todoList]);
            console.log(newTodo);
            props.setTodoTitle("");
        } else {
            alert("Empty String");
        }
    };

    // UpdateHandler
    const updateHandler = (event) => {
        if (props.todoTitle) {
            event.preventDefault();
            props.editableTodo.title = props.todoTitle;
            fetch(`http://localhost:3000/name/${props.editableTodo.id}`, {
                method: "PATCH",
                body: JSON.stringify(props.editableTodo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => {
                props.getData();
                props.setEditableTodo(null);
            })
            props.setEditable(false);
            props.setTodoTitle("");
        } else {
            props.setEditable(false);
            alert("input can't be empty");
        }
    };

    //return
    return (
        <form>
            <input
                type="text"
                placeholder="Enter a valid Todo"
                value={props.todoTitle}
                onChange={

                    (e) => props.setTodoTitle(e.target.value)
                }
            />

            <button
                onClick={(event) => {
                    props.isEditable ? updateHandler(event) : createHandler(event);
                }}
            >
                {" "}
                {props.isEditable ? "Update Todo" : "Add Todo"}
            </button>
        </form>
    );
}

export default Form;
