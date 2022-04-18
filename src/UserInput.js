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
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <p>{formatToCapitalCase(props.currentCategory)}</p>
        <input
          type="number"
          value={hours}
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
              activityType: props.currentCategory,
              timestamp: startDate.toISOString(),
              hours: hours,
            };
            dispatch(saveActivityRecord(actionPayload));
          }}
        >
          Enter
        </button>
        <button
          className="closeButton"
          onClick={(e) => {
            props.onClose(e);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default UserInput;
