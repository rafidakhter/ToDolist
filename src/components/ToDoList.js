import React from "react";
import ToDo from "./Todo";

const ToDoList = ({ toDos, setToDos, filteredToDOs }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDOs.map((Todo) => (
          <ToDo setToDos={setToDos} toDos={toDos} Todo={Todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
