import React from "react";
import "./Profile.css";
import profileImage from "./images/image-jeremy.png";

class Profile extends React.Component {
  render() {
    return (
      <article className="profile-card">
        <div class="top">
          <img src={profileImage} />
          <p class="report-for">Report for</p>

          <p class="name">
            Jeremy <br />
            Robson
          </p>
        </div>

        <div>
          <div class="profile-card-options">
            {/* <button onClick={appState.currentView = 'daily'}>Daily</p> */}
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>
      </article>
    );
  }
}

export default Profile;
