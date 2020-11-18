import React from "react";

const ToDo = ({ Todo, toDos, setToDos }) => {
  //Events

  const deleteHandler = () => {
    console.log(Todo.text, Todo.id, "deleted");
    setToDos(toDos.filter((el) => el.id !== Todo.id));
  };

  const completeHandler = () => {
    console.log(Todo.text, Todo.id, "completed");
    setToDos(
      toDos.map((item) => {
        if (item.id === Todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${Todo.completed ? "completed" : ""}`}>
        {Todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDo;
