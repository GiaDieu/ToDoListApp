import React, { ChangeEvent } from "react";
import TodoItem from "./TodoItem";
import { TodoItemDataParams } from "../store/modules/TodoTypes";

export interface TodoListProps {
  input: string;
  TodoItems: TodoItemDataParams[];
  onCreate: () => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  input,
  TodoItems,
  onCreate,
  onRemove,
  onToggle,
  onChangeInput,
}) => {
  const TodoItemList =
    TodoItems &&
    TodoItems.map((Todo) =>
      Todo ? (
        <TodoItem
          key={Todo.id}
          done={Todo.done}
          onToggle={() => onToggle(Todo.id)}
          onRemove={() => onRemove(Todo.id)}
          text={Todo.text}
        />
      ) : null
    );
  return (
    <>
      <form
        onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          onCreate();
        }}
      >
        <input type="text" value={input} onChange={onChangeInput} />
        <button disabled={!input}>Add</button>
      </form>
      <ul>{TodoItemList}</ul>
    </>
  );
};

export default TodoList;
