import React, { Component } from "react";

class InputForm extends Component {
  state = { term: "", key: "", done: false };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term, this.state.key, this.state.done);
    this.setState({
      term: "",
      key: "",
      done: false
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input">
            <input
              style={{ width: "600px" }}
              placeholder="adding..."
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({
                  term: e.target.value,
                  key: Date.now(),
                  done: false
                })
              }
            />
            <button
              className="ui primary button"
              type="submit"
              style={{ padding: "10px" }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
