import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleToDoList from "../containers/VisibleToDoList";
import Footer from "../components/Footer";
function App() {
  return (
    <div>
      <AddTodo />
      <VisibleToDoList />
      <Footer />
    </div>
  );
}

export default App;
