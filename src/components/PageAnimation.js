import React from "react";
import { Animated } from "react-animated-css";

export default function PageAnimation(props) {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      {props.children}
    </Animated>
  );
}
