import React from "react";
import FilterContainer from "../container/FilterContainer";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from "../store/modules/FilterTypes";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <FilterContainer filter={SHOW_ALL} />
      <FilterContainer filter={SHOW_ACTIVE} />
      <FilterContainer filter={SHOW_COMPLETED} />
    </div>
  );
};

export default Footer;
