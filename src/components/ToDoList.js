import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
  }
  onHandleDelete = (item, key, status) => {
    this.props.onHandleDelete(item, key, status);
  };
  render() {
    const { items } = this.props;
    const ListOfItems = items.map((item, index) => {
      let { title } = item;
      return title !== "" ? (
        <div
          className="ui olive inverted segment"
          key={item.key}
          style={{ marginTop: "15px" }}
        >
          <ToDoItem
            index={index}
            onHandleDelete={this.onHandleDelete}
            info={item}
            handleClick={this.props.handleClick}
          />
        </div>
      ) : (
        ""
      );
    });
    return <div>{ListOfItems}</div>;
  }
}

export default ToDoList;
