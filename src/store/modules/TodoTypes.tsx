export interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoState {
  TodoItems: TodoItemDataParams[];
  input: string;
}

export const CREATE = "todo/CREATE";
export const REMOVE = "todo/REMOVE";
export const TOGGLE = "todo/TOGGLE";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";

export interface CreateTodo {
  type: typeof CREATE;
  payload: TodoItemDataParams;
}

export interface RemoveTodo {
  type: typeof REMOVE;
  meta: {
    id: number;
  };
}

export interface ToggleTodo {
  type: typeof TOGGLE;
  meta: {
    id: number;
  };
}

export interface ChangeInputTodo {
  type: typeof CHANGE_INPUT;
  meta: {
    input: string;
  };
}

export type TodoActionTypes =
  | CreateTodo
  | RemoveTodo
  | ToggleTodo
  | ChangeInputTodo;
