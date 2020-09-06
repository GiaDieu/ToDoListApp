export const SET_FILTER = "todo/SET_FILTER";
export const SHOW_ALL: string = "SHOW_ALL";
export const SHOW_ACTIVE: string = "SHOW_ACTIVE";
export const SHOW_COMPLETED: string = "SHOW_COMPLETED";

export const VisiblityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED",
};
export type filterAction = {
  type: typeof SET_FILTER;
  meta: {
    filter: string;
  };
};

export const setFilter = (filter: string) => {
  return {
    type: SET_FILTER,
    meta: {
      filter,
    },
  };
};
