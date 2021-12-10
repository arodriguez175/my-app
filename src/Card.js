import React from "react";
import { ReactComponent as Icon } from "./images/icon-work.svg";
import "./Card.css";

class Card extends React.Component {
  render() {
    const activityTitle = this.props.activityTitle || "";
    return (
      <article className="background-card" id={activityTitle.toLowerCase()}>
        <Icon />
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
