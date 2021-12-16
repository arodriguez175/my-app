import React from "react";
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
  weekly: [
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
  monthly: [
    {
      activityType: "work",
      currentHours: 103,
      previousHours: 128,
    },
    {
      activityType: "play",
      currentHours: 23,
      previousHours: 29,
    },
    {
      activityType: "study",
      currentHours: 13,
      previousHours: 19,
    },
    {
      activityType: "exercise",
      currentHours: 11,
      previousHours: 18,
    },
    {
      activityType: "social",
      currentHours: 21,
      previousHours: 23,
    },
    {
      activityType: "selfcare",
      currentHours: 7,
      previousHours: 11,
    },
  ],
};

class App extends React.Component {
  // TODO: add state to App component, store the current view we would like to have (daily/weekly/monthly)
  /*state = {
    currentView: 'daily', 'weekly', 'monthly',
  }*/

  render() {
    return (
      <div class="grid-container">
        <div class="grid-item" id="profile-item">
          <Profile />
        </div>
        {/* {timeSpentData[this.state.currentView].map((item) => { */}
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
    );
  }
}

export default App;
