import React from "react";
import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { StoreState } from "../store/modules";
import { TodoItemDataParams } from "../store/modules/TodoTypes";
import { ActionCreatores as TodosActions } from "../store/modules/TodoActions";
import { VisiblityFilters } from "../store/modules/FilterTypes";

interface Props {
  TodoItems: TodoItemDataParams[];
  input: string;
  TodosActions: typeof TodosActions;
}

class TodoListContainer extends React.Component<Props> {
  onCreate = (): void => {
    const { TodosActions, input } = this.props;
    TodosActions.create(input);
  };
  onRemove = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.remove(id);
  };
  onToggle = (id: number): void => {
    const { TodosActions } = this.props;
    TodosActions.toggle(id);
  };
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    const { TodosActions } = this.props;
    TodosActions.changeInput(value);
  };

  render() {
    const { input, TodoItems } = this.props;
    const { onCreate, onChange, onRemove, onToggle } = this;
    return (
      <TodoList
        input={input}
        TodoItems={TodoItems}
        onChangeInput={onChange}
        onCreate={onCreate}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    );
  }
}

// export default connect(
//   ({ TodoReducer }: StoreState) => ({
//     input: TodoReducer.input,
//     TodoItems: TodoReducer.TodoItems,
//   }),
//   (dispatch) => ({
//     TodosActions: bindActionCreators(TodosActions, dispatch),
//   })
// )(TodoListContainer);

const visibleList = (todos: TodoItemDataParams[], filter: string) => {
  switch (filter) {
    case VisiblityFilters.SHOW_ALL:
      return todos;
    case VisiblityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.done);
    case VisiblityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
};

const mapStateToProps = (state: StoreState) => {
  const VisibleListItems = visibleList(
    state.TodoReducer.TodoItems,
    state.filter
  );
  return {
    input: state.TodoReducer.input,
    TodoItems: VisibleListItems,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    TodosActions: bindActionCreators(TodosActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
