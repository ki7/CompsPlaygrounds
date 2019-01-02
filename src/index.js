import React from "react";
import ReactDOM from "react-dom";
import styled, { css, injectGlobal } from "@emotion/styled";
import Timeline from "../components/Timeline.js";

import "./styles.css";

const TimelineItem = ({ index, content }) => {
  return (
    <div className="ing-Timed">
      <span>{index}</span>
      <p>{content}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Timeline />
      <TimelineItem index="1" content="Yolo" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
