import React, { useState, useEffect } from "react";
import "./App.css";

//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredToDOs, setFilterToDos] = useState([]);

  //Effect
  // run once

  useEffect(() => {
    openLocalTodos();
  }, []);

  // run everytime toDos/ status is updated
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    //saveLocalTodos();
  }, [toDos, status]);

  //Functions and events
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilterToDos(toDos.filter((toDo) => toDo.completed === true));
        break;
      case "Uncompleted":
        setFilterToDos(toDos.filter((toDo) => toDo.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  };
  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  };

  // open from local storage
  const openLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(toDoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do list</h1>
      </header>
      <Form
        toDos={toDos}
        setToDOs={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        filteredToDOs={filteredToDOs}
      />
    </div>
  );
}

export default App;
