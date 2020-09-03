import { combineReducers } from "redux";
import TodoReducer from "./Reducers";
import { TodoState } from "./TodoTypes";

export interface StoreState {
  TodoReducer: TodoState;
}

export default combineReducers<StoreState>({
  TodoReducer,
});
