import React from "react";
import { ReactComponent as WorkIcon } from "./images/icon-work.svg";
import { ReactComponent as PlayIcon } from "./images/icon-play.svg";
import { ReactComponent as StudyIcon } from "./images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "./images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "./images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "./images/icon-self-care.svg";
import { formatToCapitalCase } from "./utils";
import "./Card.css";

const icons = {
  work: <WorkIcon />,
  play: <PlayIcon />,
  study: <StudyIcon />,
  exercise: <ExerciseIcon />,
  social: <SocialIcon />,
  selfcare: <SelfCareIcon />,
};

class Card extends React.Component {
  render() {
    const activityTitle = this.props.activityTitle || "";

    return (
      <article className="background-card" id={activityTitle}>
        {/* get an icon for the activity */}
        <div className="iconClass">{icons[activityTitle]}</div>
        <div className="card-body">
          <p className="activity-titles">
            {formatToCapitalCase(activityTitle)}
          </p>
          <p className="time">
            {this.props.time}hrs
            <button
              className="modalButton"
              onClick={() => {
                this.props.onClick(activityTitle);
              }}
            >
              Enter Time
            </button>
          </p>
          <p className="previous-time">
            {this.props.previousTimeLabel} {this.props.previousTime}hrs
          </p>
        </div>
      </article>
    );
  }
}

export default Card;
