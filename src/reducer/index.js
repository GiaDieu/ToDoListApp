import { combineReducers } from "redux";
import todos from "./todos";
import VisibleFilter from "./VisibleFilter";

export default combineReducers({
  todos,
  VisibleFilter
});
