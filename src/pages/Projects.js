import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import { Animated } from "react-animated-css";
export default function Projects(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h2>
          <GetStringFromJSON
            stringID="projects_header"
            language={props.language}
          />
        </h2>
        <p>
          <b>
            <GetStringFromJSON
              stringID="projects_bold_01"
              language={props.language}
            />
          </b>
          <GetStringFromJSON
            stringID="projects_par_01"
            language={props.language}
          />
        </p>
        <p>
          <b>
            <GetStringFromJSON
              stringID="projects_bold_02"
              language={props.language}
            />
          </b>
          <GetStringFromJSON
            stringID="projects_par_02"
            language={props.language}
          />
        </p>
        <p>
          <b>
            <GetStringFromJSON
              stringID="projects_bold_03"
              language={props.language}
            />
          </b>
          <GetStringFromJSON
            stringID="projects_par_03"
            language={props.language}
          />
        </p>
      </Animated>
    </div>
  );
}
