import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./UserInput.css";
import { formatToCapitalCase } from "./utils";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { saveActivityRecord } from "./activitySlice";

function UserInput(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [hours, setHours] = useState(0);
  const dispatch = useDispatch();

  const onClose = (e) => {
    // Uses onClose prop to change state of showModal to false to hide it
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="modal">
        <button className="closeButton" onClick={onClose}>
          x
        </button>

        <div className="modalBody">
          {/* Selected activity card name */}
          <p>{formatToCapitalCase(props.currentCategory)}</p>

          <input
            type="number"
            value={hours}
            // Set state for hours to match what the value is being entered in input
            onChange={(event) => setHours(event.target.value)}
          ></input>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <button
            className="enterButton"
            onClick={() => {
              const actionPayload = {
                // Selected activity name
                activityType: props.currentCategory,
                // Time stamp as a string
                timestamp: startDate.toISOString(),
                // Turns hours from a string to a number without decimals
                hours: parseInt(hours) || 0,
              };
              dispatch(saveActivityRecord(actionPayload));
            }}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
