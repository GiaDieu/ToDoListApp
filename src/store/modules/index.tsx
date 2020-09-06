import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import { TodoState } from "./TodoTypes";
import filter from "./FilterReducer";

export interface StoreState {
  TodoReducer: TodoState;
  filter: string;
}

export default combineReducers<StoreState>({
  TodoReducer,
  filter,
});
