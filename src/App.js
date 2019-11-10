import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [filter, setFilter] = useState("All");
  const theme = useContext(ThemeContext);

  const handleSubmit = value => {
    if (!value) return;
    const newToDos = [...toDos, value];
    setToDos(newToDos);
  };

  const toggleComplete = index => {
    const newtoDos = [...toDos];
    newtoDos[index].isCompleted = !newtoDos[index].isCompleted;
    setToDos(newtoDos);
  };

  const onHandleDelete = isCompleted => {
    if (isCompleted) {
      const FilteredItem = toDos.filter(
        toDo => toDo.isCompleted !== isCompleted
      );
      setToDos(FilteredItem);
    }
  };

  const onDeleteAllCompleted = () => {
    const FilteredItem = toDos.filter(toDo => !toDo.isCompleted);
    setToDos(FilteredItem);
  };

  // all 3 buttons to show the information
  let newToDos = [];
  if (filter === "All") {
    newToDos = toDos;
  } else if (filter === "Active") {
    newToDos = toDos.filter(toDo => !toDo.isCompleted);
  } else if (filter === "Complete") {
    newToDos = toDos.filter(toDo => toDo.isCompleted);
  }
  const updateFilterResult = valueName => {
    setFilter(valueName);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setToDos([]);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: theme.background }} className="App">
      <InputForm onSubmit={handleSubmit} />
      <ToDoList
        items={newToDos}
        onHandleComplete={toggleComplete}
        onDelete={onHandleDelete}
        onHandleClick={updateFilterResult}
        onDeleteComplete={onDeleteAllCompleted}
      />
    </div>
  );
};

export default App;
