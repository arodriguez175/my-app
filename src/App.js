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

    /* changeViewHandler is passed from Profile.js to App.js and is 
    operating with the state of the App component instead of the state 
    from the Profile component */
    this.changeView = this.changeView.bind(this);
  }

  /* For toggling the different options in the profile card 
  to show hours for either daily, weekly, or monthly. */
  changeView(view) {
    this.setState({
      /* view will have a value of whatever Profile component passes: either daily,
      weekly, monthly if one of the buttons are clicked. */
      currentView: view,
    });
  }

  showModal = (activityTitle) => {
    this.setState({
      showModal: !this.state.showModal, // Show modal by toggling opposite value
      currentCategory: activityTitle, // Make modal title match the activity selected
    });
  };

  render() {
    /* Assigns the appropriate text for the label that reads 
    previous hours, last week, or last month depending on if 
    a user chose to view the dashboard data from daily, weekly, or monthly */
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
          {/* this.props.activityStats uses activityStats object as a prop 
          from mapStateToProps below */}
          {/* Maps the activity stats specific to the state of the current view */}
          {this.props.activityStats[this.state.currentView]?.map((item) => {
            return (
              <div className="grid-item" key={item.activityType}>
                {/* Card component */}
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
              {/* Mock data */}
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
/* mapStateToProps allows some of the items from the state to be passed as props */
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

  // mapStateToProps always returns an object.
  // These object properties will appear inside props.
  return {
    activityStats: {
      daily: dailyActivityStats,
      weekly: weeklyActivityStats,
      monthly: monthlyActivityStats,
    },
  };
}

/* mapDispatchToProps allows some actions from the store to be used */
// Only way to trigger a state change.
/* Lets you create functions that dispatch when called, and pass those functions
 as props to your component. */
function mapDispatchToProps(dispatch) {
  return {
    populateWithMockData: () => dispatch(populateWithMockData()),
  };
}

/* To get my components to actually use and update the store for state, 
the connect function is used. This connects my component to the store.
It allows you to take the store that was provided by the Provider, 
take the data it needs from the store as well as functions it can use to 
dispatch actions to the store, and pass them over to the App component as props */
export default connect(mapStateToProps, mapDispatchToProps)(App);
