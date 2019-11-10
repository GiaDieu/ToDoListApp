import React from "react";
import ToDoItem from "./ToDoItem";
const ToDoList = props => {
  const { items } = props;

  const toggleComplete = index => {
    props.onHandleComplete(index);
  };

  const onHandleDelete = isCompleted => {
    props.onDelete(isCompleted);
  };
  const IterateList = items.map((item, index) => {
    return (
      <div key={item.id}>
        <ToDoItem
          index={index}
          title={item.title}
          id={item.id}
          isCompleted={item.isCompleted}
          onHandleClick={toggleComplete}
          onDelete={onHandleDelete}
        />
      </div>
    );
  });

  return (
    <div>
      {IterateList}
      <div>
        <button onClick={() => props.onHandleClick("All")}>All</button>
        <button onClick={() => props.onHandleClick("Active")}>Active</button>
        <button onClick={() => props.onHandleClick("Complete")}>
          Completed
        </button>
      </div>
      <div>
        {items.filter(item => item.isCompleted).length ? (
          <div>
            <button onClick={() => props.onDeleteComplete()}>
              Clear Completed
            </button>
          </div>
        ) : null}
      </div>
      <div>Items left: {items.filter(item => !item.isCompleted).length}</div>
    </div>
  );
};

export default ToDoList;
