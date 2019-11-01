import React from "react";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";

import faker from "faker";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        { title: "Hanging out with girlfriend", key: "Must-do", done: false }
      ]
    };
  }
  onSearchSubmit = (item, key, status) => {
    // let itemToAdd = { title: item, key: key, done: status };
    // // let newState = this.state.toDoItems.push(itemToAdd);
    // const newState = [...this.state.toDoItems, itemToAdd];
    // this.setState({ toDoItems: newState });
    const newToDo = {
      title: item,
      key: key,
      done: status
    };
    const toDoItems = [...this.state.toDoItems];
    toDoItems.push(newToDo);
    this.setState({ toDoItems });
  };

  onHandleDelete = (item, key, status) => {
    if (status) {
      const filteredItem = this.state.toDoItems.filter(
        todoItem => todoItem.key !== key
      );
      this.setState({ toDoItems: filteredItem });
    } else {
      alert("this task is not completed yet!");
    }
  };

  handleClick = index => {
    const toDoItems = this.state.toDoItems;
    toDoItems[index].done = !toDoItems[index].done;
    this.setState({ toDoItems });
  };

  render() {
    return (
      <div
        className="ui raised very padded text container segment"
        key={this.state.toDoItems.key}
      >
        <div>
          <h2 className="ui header">
            <img
              alt="avatar"
              src={faker.image.animals()}
              className="ui circular image"
            />
            To Do List
          </h2>
          <InputForm onSubmit={this.onSearchSubmit} />
        </div>
        <ToDoList
          handleClick={this.handleClick}
          onHandleDelete={this.onHandleDelete}
          items={this.state.toDoItems}
        />
      </div>
    );
  }
}

export default App;
