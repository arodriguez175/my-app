import React from "react";
import "./UserInput.css";
import { formatToCapitalCase } from "./utils";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class UserInput extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const [startDate, setStartDate] = this.setState(new Date());

    return (
      <div className="modal">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <div className="modalContent">
          <p>{formatToCapitalCase(this.props.currentCategory)}</p>
          <input></input>
          <button className="enterButton" onClick={() => {}}>
            Enter
          </button>
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
