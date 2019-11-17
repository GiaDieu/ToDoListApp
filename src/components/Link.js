import React from "react";

const Link = props => {
  return (
    <div>
      <button
        disabled={props.active}
        onClick={() => props.setVisibilityFilter(props.filter)}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Link;
