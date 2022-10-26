import React from "react";
import { formatToCapitalCase } from "./utils.js";
import profileImage from "./images/image-jeremy.png";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    // Store the changeViewHandler prop inside a variable
    let changeView = this.props.changeViewHandler;

    /* These will be used as option names for the buttons to change 
    the dashbaord state */
    let views = ["daily", "weekly", "monthly"];

    return (
      <article className="profile-card">
        <div className="top">
          <div className="image-container">
            <img src={profileImage} alt="Selfie" />
          </div>
          <p className="report-for">Report for</p>

          <p className="name">
            Jeremy <br />
            Robson
          </p>
        </div>

        <div>
          <div className="profile-card-options">
            {/* Map the daily, weekly, and monthly strings as buttons 
            to prevent making three button onClick properties */}
            {views.map((view) => (
              <button
                key={view}
                /* If view matches the current view from the state, give 
                this a className of "current" otherwise give this className 
                an empty string */
                className={view === this.props.currentView ? "current" : ""}
                onClick={() => {
                  /* Run my event handler that changes the state of the current view
                   to either daily, weekly, or monthly */
                  changeView(view);
                }}
              >
                {formatToCapitalCase(view)}
              </button>
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default Profile;
