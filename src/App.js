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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      showModal: !this.state.showModal, // set to "not false" to show modal
      currentCategory: activityTitle,
    });
  };

  render() {
    let previousLabel;
    // Assigns the appropriate string depending on the value of currentView
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
        <a
          className="github"
          href="https://github.com/arodriguez175/Time-Tracking-Dashboard-App"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        {/* Modal component */}
        <UserInput
          show={this.state.showModal}
          onClose={() => this.setState({ showModal: false })}
          currentCategory={this.state.currentCategory}
        />

        {/*Profile card */}
        <div className="grid-container">
          <div className="grid-item" id="profile-item">
            <Profile
              changeViewHandler={this.changeView}
              currentView={this.state.currentView}
            />
          </div>

          {/* Activity cards */}
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

/* Data from daily, weekly, and monthly activity stats that my App component needs */
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
