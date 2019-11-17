import { connect } from "react-redux";
import {
  toggleToDo,
  deleteToDo,
  VisibilityFilters,
  clearCompleted
} from "../action";
import ToDoList from "../components/ToDoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.VisibleFilter),
    toggleToDo: state.toggleToDo,
    deleteToDo: state.deleteToDo,
    clearCompleted: clearCompleted
  };
};

export default connect(mapStateToProps, {
  toggleToDo,
  deleteToDo,
  VisibilityFilters,
  clearCompleted
})(ToDoList);
