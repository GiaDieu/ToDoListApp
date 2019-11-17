import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../action";
import "../css/style.css";
const Footer = () => {
  return (
    <div className="flex">
      <span>Show: </span>
      <FilterLink className="flex-box1" filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink className="flex-box2" filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink
        className="flex-box3"
        filter={VisibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </FilterLink>
    </div>
  );
};

export default Footer;
