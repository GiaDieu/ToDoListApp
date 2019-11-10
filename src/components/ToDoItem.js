import React, { useEffect } from "react";

const ToDoItem = props => {
  const toggleComplete = () => {
    props.onHandleClick(props.index);
  };

  const onHandleDelete = () => {
    props.onDelete(props.isCompleted);
  };

  useEffect(() => {
    document.title = `You have added ${props.title}`;
  }, [props.title]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={toggleComplete}
        />
        <span
          style={{ textDecoration: props.isCompleted ? "line-through" : "" }}
        >
          {props.title}
        </span>
      </label>
      <button onClick={onHandleDelete}>x</button>
    </div>
  );
};

export default ToDoItem;
