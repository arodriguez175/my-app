import React from "react";
import "./Profile.css";
import profileImage from "./images/image-jeremy.png";

class Profile extends React.Component {
  render() {
    let changeView = this.props.changeViewHandler;
    return (
      <article className="profile-card">
        <div class="top">
          <div className="image-container">
            <img src={profileImage} />
          </div>
          <p class="report-for">Report for</p>

          <p class="name">
            Jeremy <br />
            Robson
          </p>
        </div>

        <div>
          <div class="profile-card-options">
            <button
              onClick={() => {
                changeView("daily");
              }}
            >
              Daily
            </button>
            <button
              onClick={() => {
                changeView("weekly");
              }}
            >
              Weekly
            </button>
            <button
              onClick={() => {
                changeView("monthly");
              }}
            >
              Monthly
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Profile;
