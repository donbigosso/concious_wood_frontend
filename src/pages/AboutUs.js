import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import { Animated } from "react-animated-css";
export default function AboutUs(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h2>
          <GetStringFromJSON
            stringID="about_header"
            language={props.language}
          />
        </h2>
        <p>
          <GetStringFromJSON
            stringID="about_par_01"
            language={props.language}
          />
        </p>
        <p>
          <GetStringFromJSON
            stringID="about_par_02"
            language={props.language}
          />
        </p>
        <p>
          <GetStringFromJSON
            stringID="about_par_03"
            language={props.language}
          />
        </p>
        <p>
          <GetStringFromJSON
            stringID="about_par_04"
            language={props.language}
          />
        </p>
      </Animated>
    </div>
  );
}
