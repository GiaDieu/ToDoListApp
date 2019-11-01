import React, { Component } from "react";
import "../ToDoItem.css";

class ToDoItem extends Component {
  onHandleDelete = () => {
    this.props.onHandleDelete(
      this.props.info.title,
      this.props.info.key,
      this.props.info.done
    );
  };
  render() {
    const { title, done } = this.props.info;
    return (
      <div className="container">
        <div className="flex-span">
          <span style={{ textDecoration: done ? "line-through" : "" }}>
            {title}
          </span>
        </div>
        <div className="flex-button">
          <button
            className="ui blue button"
            onClick={() => this.props.handleClick(this.props.index)}
          >
            <span>{done ? "undo" : "completed"}</span>
          </button>
        </div>
        <div className="flex-delete">
          <button className="ui red button" onClick={this.onHandleDelete}>
            <span>Delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
