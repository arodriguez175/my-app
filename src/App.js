import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Profile from "./Profile";
import UserInput from "./UserInput";
import { populateWithMockData } from "./activitySlice";
import {
  calculateActivityStatsByCategory,
  calculateWeeklyActivityStatsByCategory,
  calculateMonthlyActivityStatsByCategory,
} from "./utils.js";
import { activityCategories } from "./constants.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "daily",
      showModal: false,
      // Current category of modal.
      currentCategory: "",
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      currentView: view,
    });
  }

  showModal = (activityTitle) => {
    this.setState({
      showModal: !this.state.showModal,
      currentCategory: activityTitle,
    });
  };

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
      <div>
        {/*<UserInput show={this.state.showModal} onClose={this.state.onClose} />*/}
        <UserInput
          show={this.state.showModal}
          onClose={() => this.setState({ showModal: false })}
          currentCategory={this.state.currentCategory}
        />

        <div className="grid-container">
          <div className="grid-item" id="profile-item">
            <Profile
              changeViewHandler={this.changeView}
              currentView={this.state.currentView}
            />
          </div>

          {/* Replaced timeSpentData with activityStats */}
          {this.props.activityStats[this.state.currentView]?.map((item) => {
            return (
              <div className="grid-item" key={item.activityType}>
                {/* Card component with props for dynamic changes. */}
                <Card
                  activityTitle={item.activityType}
                  time={item.currentHours}
                  previousTime={item.previousHours}
                  previousTimeLabel={previousLabel}
                  onClick={(activityTitle) => {
                    this.showModal(activityTitle);
                  }}
                />
              </div>
            );
          }) || (
            <React.Fragment>
              <div className="demo-data">
                <p>No activity yet!</p>
                <button onClick={this.props.populateWithMockData}>
                  Add some mock data
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const dailyActivityStats = calculateActivityStatsByCategory(
    state.activity.activityRecords,
    activityCategories
  );

  const weeklyActivityStats = calculateWeeklyActivityStatsByCategory(
    state.activity.activityRecords,
    activityCategories
  );

  const monthlyActivityStats = calculateMonthlyActivityStatsByCategory(
    state.activity.activityRecords,
    activityCategories
  );

  return {
    activityStats: {
      daily: dailyActivityStats,
      weekly: weeklyActivityStats,
      monthly: monthlyActivityStats,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    populateWithMockData: () => dispatch(populateWithMockData()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
