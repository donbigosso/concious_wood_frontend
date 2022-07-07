import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import { Animated } from "react-animated-css";
export default function AboutUs(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h1>
          <GetStringFromJSON stringID="about_label" language={props.language} />
        </h1>
        <p>
          <GetStringFromJSON
            stringID="about_content"
            language={props.language}
          />
        </p>
      </Animated>
    </div>
  );
}
