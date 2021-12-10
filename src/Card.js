import React from "react";
import { ReactComponent as WorkIcon } from "./images/icon-work.svg";
import { ReactComponent as PlayIcon } from "./images/icon-play.svg";
import "./Card.css";

// depending on activity type, render a different icon
const icons = {
  work: <WorkIcon/>,
  play: <PlayIcon/>,
}
class Card extends React.Component {
  render() {
    const activityTitle = this.props.activityTitle || "";
    return (
      <article className="background-card" id={activityTitle.toLowerCase()}>
        {/* get an icon for the activity */}
        {icons[activityTitle.toLowerCase()]}
        <div className="card-body">
          <p className="activity-titles">{activityTitle}</p>
          <p className="time">{this.props.time}hrs</p>
          <p className="previous-time">Previous {this.props.previousTime}hrs</p>
        </div>
      </article>
    );
  }
}

export default Card;
