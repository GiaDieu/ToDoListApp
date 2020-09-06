import { filterAction, SET_FILTER, SHOW_ALL } from "./FilterTypes";

// let filterShowALl = VisibleTags;
// let initialState = VisibleTags[filterShowALl.SHOW_ALL];
const initialState: string = SHOW_ALL;
const filter = (state: string = initialState, action: filterAction) => {
  switch (action.type) {
    case SET_FILTER:
      return action.meta.filter;
    default:
      return state;
  }
};

export default filter;
