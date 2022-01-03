import React from "react";
import { ReactComponent as WorkIcon } from "./images/icon-work.svg";
import { ReactComponent as PlayIcon } from "./images/icon-play.svg";
import { ReactComponent as StudyIcon } from "./images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "./images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "./images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "./images/icon-self-care.svg";
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
  formatToCapitalCase(word) {
    // 1. take the first character of a word ("work" -> "w", "play" -> "p", "selfcare" -> "s")
    let firstLetter = word.charAt(0);
    // 2. make this character uppercase (example: "w" -> "W")
    firstLetter = firstLetter.toUpperCase();
    // 3. put your capitalized character as a first character of your word ("work" -> "Work")
    // 4. return the capitalized word
    return firstLetter + word.substr(1);
  }
  render() {
    const activityTitle = this.props.activityTitle || "";

    return (
      <article className="background-card" id={activityTitle}>
        {/* get an icon for the activity */}
        <div className="iconClass">{icons[activityTitle]}</div>
        <div className="card-body">
          <p className="activity-titles">
            {this.formatToCapitalCase(activityTitle)}
          </p>
          <p className="time">{this.props.time}hrs</p>
          <p className="previous-time">
            {this.props.previousTimeLabel} {this.props.previousTime}hrs
          </p>
        </div>
      </article>
    );
  }
}

export default Card;
