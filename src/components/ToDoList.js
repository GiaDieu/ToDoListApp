import React from "react";
import ToDoItem from "../components/ToDoItem";

const ToDoList = ({ todos, toggleToDo, deleteToDo, clearCompleted }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
            todo={todo}
          />
        ))}
      </ul>
      {todos.filter(todo => todo.completed).length ? (
        <button onClick={() => clearCompleted(todos)}>Clear Completed</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ToDoList;
