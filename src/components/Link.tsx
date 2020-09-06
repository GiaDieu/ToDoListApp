import React from "react";

export interface LinkProps {
  active: boolean;
  children: string;
  setFilter: () => void;
}
const Link: React.FC<LinkProps> = ({ setFilter, active, children }) => {
  console.log(active);
  return (
    <React.Fragment>
      <button onClick={setFilter} disabled={active}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Link;
