import {
  TodoState,
  TodoActionTypes,
  CREATE,
  REMOVE,
  TOGGLE,
  CHANGE_INPUT,
} from "./TodoTypes";

const initialState: TodoState = { TodoItems: [], input: "" };

const TodoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case CREATE:
      return { input: "", TodoItems: [...state.TodoItems, action.payload] };

    case TOGGLE:
      return {
        ...state,
        TodoItems: state.TodoItems.map((TodoItem) => {
          if (TodoItem.id === action.meta.id) {
            TodoItem.done = !TodoItem.done;
          }
          return TodoItem;
        }),
      };

    case REMOVE:
      return {
        ...state,
        TodoItems: state.TodoItems.filter((TodoItem) =>
          TodoItem.done ? TodoItem.id !== action.meta.id : TodoItem
        ),
      };

    case CHANGE_INPUT:
      return {
        ...state,
        input: action.meta.input,
      };

    default:
      return state;
  }
};

export default TodoReducer;
