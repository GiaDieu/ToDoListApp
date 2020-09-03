import {
  CREATE,
  CreateTodo,
  RemoveTodo,
  REMOVE,
  ToggleTodo,
  TOGGLE,
  ChangeInputTodo,
  CHANGE_INPUT,
} from "./TodoTypes";

let autoID = 0;
const create = (text: string): CreateTodo => {
  return {
    type: CREATE,
    payload: {
      id: autoID++,
      text: text,
      done: false,
    },
  };
};

const remove = (id: number): RemoveTodo => {
  return {
    type: REMOVE,
    meta: {
      id,
    },
  };
};

const toggle = (id: number): ToggleTodo => {
  return {
    type: TOGGLE,
    meta: {
      id,
    },
  };
};

const changeInput = (input: string): ChangeInputTodo => {
  return {
    type: CHANGE_INPUT,
    meta: {
      input,
    },
  };
};

export const ActionCreatores = {
  create,
  remove,
  toggle,
  changeInput,
};
