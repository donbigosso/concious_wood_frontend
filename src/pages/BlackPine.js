import React from "react";

import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Image } from "react-bootstrap";
import black_pine_min_01 from "../images/black_pine_min_01.jpg";
import black_pine_min_02 from "../images/black_pine_min_02.jpg";
import black_pine_min_03 from "../images/black_pine_min_03.jpg";
export default function BlackPine(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <Container>
          <Row>
            <h2>
              <GetStringFromJSONFormat
                stringID="black_pine_header"
                language={props.language}
              />
            </h2>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <p>
                <GetStringFromJSONFormat
                  stringID="black_pine_par_01"
                  language={props.language}
                />
              </p>
            </Col>
            <Col md={6} className="rightCol ">
              <Image
                src={black_pine_min_01}
                className="rounded mx-auto d-block miniature"
              />
              <Image
                src={black_pine_min_02}
                className="rounded mx-auto d-block miniature"
              />
              <Image
                src={black_pine_min_03}
                className="rounded mx-auto d-block miniature"
              />
              {/*<img src={black_pine_min_02} className="miniature" />
              <img src={black_pine_min_03} className="miniature" />*/}
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
