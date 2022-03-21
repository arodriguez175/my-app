import React from "react";

class UserInput extends React.Component {
  onClose = (e) => {
    this.props.show = false;
  };
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <p>Modal is here!</p>
        <input></input>
        <button></button>
        <button
          onClick={(e) => {
            this.props.onClose(e);
          }}
        >
          x
        </button>
      </div>
    );
  }
}

export default UserInput;
