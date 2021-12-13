import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Profile from "./Profile";

let timeSpentData = {
  daily: [
    {
      activityType: "work",
      currentHours: 5,
      previousHours: 7,
    },
    {
      activityType: "play",
      currentHours: 1,
      previousHours: 2,
    },
    {
      activityType: "study",
      currentHours: 0,
      previousHours: 1,
    },
    {
      activityType: "exercise",
      currentHours: 1,
      previousHours: 1,
    },
    {
      activityType: "social",
      currentHours: 1,
      previousHours: 3,
    },
    {
      activityType: "selfcare",
      currentHours: 0,
      previousHours: 1,
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <div class="grid-container">
      <div class="grid-item" id="profile-item">
        <Profile />
      </div>
      {timeSpentData.daily.map((item) => {
        return (
          <div class="grid-item">
            <Card
              activityTitle={item.activityType}
              time={item.currentHours}
              previousTime={item.previousHours}
            />
          </div>
        );
      })}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
