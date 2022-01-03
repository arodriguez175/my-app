import React from "react";
import Card from "./Card";
import Profile from "./Profile";

let timeSpentData = {
  daily: [
    {
      activityType: "Work",
      currentHours: 5,
      previousHours: 7,
    },
    {
      activityType: "Play",
      currentHours: 1,
      previousHours: 2,
    },
    {
      activityType: "Study",
      currentHours: 0,
      previousHours: 1,
    },
    {
      activityType: "Exercise",
      currentHours: 1,
      previousHours: 1,
    },
    {
      activityType: "Social",
      currentHours: 1,
      previousHours: 3,
    },
    {
      activityType: "SelfCare",
      currentHours: 0,
      previousHours: 1,
    },
  ],
  weekly: [
    {
      activityType: "Work",
      currentHours: 32,
      previousHours: 36,
    },
    {
      activityType: "Play",
      currentHours: 10,
      previousHours: 8,
    },
    {
      activityType: "Study",
      currentHours: 4,
      previousHours: 7,
    },
    {
      activityType: "Exercise",
      currentHours: 4,
      previousHours: 5,
    },
    {
      activityType: "Social",
      currentHours: 5,
      previousHours: 10,
    },
    {
      activityType: "Selfcare",
      currentHours: 2,
      previousHours: 2,
    },
  ],
  monthly: [
    {
      activityType: "Work",
      currentHours: 103,
      previousHours: 128,
    },
    {
      activityType: "Play",
      currentHours: 23,
      previousHours: 29,
    },
    {
      activityType: "Study",
      currentHours: 13,
      previousHours: 19,
    },
    {
      activityType: "Exercise",
      currentHours: 11,
      previousHours: 18,
    },
    {
      activityType: "Social",
      currentHours: 21,
      previousHours: 23,
    },
    {
      activityType: "SelfCare",
      currentHours: 7,
      previousHours: 11,
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "daily",
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      currentView: view,
    });
  }

  render() {
    let previousLabel;
    switch (this.state.currentView) {
      case "daily":
        previousLabel = "Previous Hours - ";
        break;
      case "weekly":
        previousLabel = "Last Week - ";
        break;
      case "monthly":
        previousLabel = "Last Month - ";
        break;
      default:
        previousLabel = "Previous Hours - ";
    }
    return (
      <div class="grid-container">
        <div class="grid-item" id="profile-item">
          <Profile changeViewHandler={this.changeView} />
        </div>

        {timeSpentData[this.state.currentView].map((item) => {
          return (
            <div class="grid-item">
              <Card
                activityTitle={item.activityType}
                time={item.currentHours}
                previousTime={item.previousHours}
                previousTimeLabel={previousLabel}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
