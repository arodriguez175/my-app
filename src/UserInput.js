import React from "react";
import "./UserInput.css";

class UserInput extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modalContent">
          <p>Modal is here!</p>
          <input></input>
          <button className="enterButton">Enter</button>
          <button
            className="closeButton"
            onClick={(e) => {
              this.props.onClose(e);
            }}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default UserInput;
