import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";

ReactDOM.render(
  <React.StrictMode>
    <div class="grid-container">
      <div class="grid-item">
        <Card activityTitle="Work" time={5} previousTime={7} />
      </div>
      <div class="grid-item">
        <Card activityTitle="Play" time={1} previousTime={2} />
      </div>
      <div class="grid-item">
        <Card activityTitle="Study" time={0} previousTime={1} />
      </div>
      <div class="grid-item">
        <Card activityTitle="Exercise" time={1} previousTime={1} />
      </div>
      <div class="grid-item">
        <Card activityTitle="Social" time={1} previousTime={3} />
      </div>
      <div class="grid-item">
        <Card activityTitle="Self-Care" time={0} previousTime={1} />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
