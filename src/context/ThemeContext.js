import React from "react";

export const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee"
  },
  dark: {
    color: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(
  themes.light // default value
);

export default ThemeContext;
