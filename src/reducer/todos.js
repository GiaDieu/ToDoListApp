const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.text,
          id: action.id,
          completed: false
        }
      ];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_TODO":
      return action.completed
        ? state.filter(todo => todo.id !== action.id)
        : state;

    case "CLEAR_COMPLETED":
      return state.filter(todos => !todos.completed);

    default:
      return state;
  }
};

export default todos;
