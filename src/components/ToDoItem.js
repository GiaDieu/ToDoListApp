import React from "react";
import "../css/style.css";

const ToDoItem = props => {
  const { title, id, completed } = props.todo;
  return (
    <div className="flex">
      <div className="flex-1">
        <li
          onClick={() => props.toggleToDo(id)}
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {title}
        </li>
      </div>
      <div className="flex-2">
        <button onClick={() => props.deleteToDo(id, completed)}>x</button>
      </div>
    </div>
  );
};

export default ToDoItem;
