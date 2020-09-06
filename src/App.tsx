import React from "react";
import TodoListContainers from "./container/TodoListContainers";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <TodoListContainers />
      <Footer />
    </div>
  );
};

export default App;
