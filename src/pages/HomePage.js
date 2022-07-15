import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import { Animated } from "react-animated-css";
import Mini01 from "../images/mini_01.jpg";
export default function HomePage(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h2>
          <GetStringFromJSON stringID="home_header" language={props.language} />
        </h2>
        <img src={Mini01} className="miniature300" />
        <p title="Concious">
          <GetStringFromJSON stringID="home_par_01" language={props.language} />
        </p>
        <p>
          <GetStringFromJSON stringID="home_par_02" language={props.language} />
        </p>
        <p>
          <GetStringFromJSON stringID="home_par_03" language={props.language} />
        </p>
      </Animated>
    </div>
  );
}
