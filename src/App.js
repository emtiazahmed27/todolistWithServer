import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const getData= () =>{
    fetch("http://localhost:3000/name")
            .then(res => res.json()).then(data => {
                setTodoList(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setErrMsg(err.message);
                setIsLoading(false);
            })
  }

  return (
    <div className="todo-app">
      <h1>Todo APP</h1>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        setEditable={setEditable}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}
        isEditable={isEditable}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        setErrMsg={setErrMsg}
        errMsg={errMsg}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        getData={getData}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setEditable={setEditable}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}
        isEditable={isEditable}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        setErrMsg={setErrMsg}
        errMsg={errMsg}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        getData={getData}
      />
    </div>
  );
}

export default App;
