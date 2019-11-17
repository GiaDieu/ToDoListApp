let nextId = 0;
export const addToDo = text => ({
  type: "ADD_TODO",
  id: nextId++,
  text
});

export const toggleToDo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteToDo = (id, completed) => ({
  type: "DELETE_TODO",
  id,
  completed
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const clearCompleted = completed => ({
  type: "CLEAR_COMPLETED",
  completed
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
