import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../action";

class AddTodo extends React.Component {
  state = { title: "" };
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={e => {
              this.setState({
                title: e.target.value
              });
            }}
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addToDo: state.AddTodo
  };
};
export default connect(mapStateToProps, { addToDo })(AddTodo);
