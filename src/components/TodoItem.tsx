import React from "react";

export interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
  onRemove: () => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  text,
  done,
  onToggle,
  onRemove,
}) => {
  return (
    <li>
      <span
        style={{ textDecoration: done ? "line-through" : "none" }}
        onClick={onToggle}
      >
        {text}
      </span>
      <button style={{ all: "unset", marginLeft: "0.5rem" }} onClick={onRemove}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
