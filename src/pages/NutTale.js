import React from "react";

import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Image } from "react-bootstrap";
import nut_tale_min_01 from "../images/nut_tale_min_01.jpg";
import nut_tale_min_02 from "../images/nut_tale_min_02.jpg";
import nut_tale_min_03 from "../images/nut_tale_min_03.jpg";
export default function NutTale(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <Container>
          <Row>
            <h2>
              <GetStringFromJSONFormat
                stringID="nut_tale_header"
                language={props.language}
              />
            </h2>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <p>
                <GetStringFromJSONFormat
                  stringID="nut_tale_par_01"
                  language={props.language}
                />
              </p>
            </Col>
            <Col md={6} className="rightCol ">
              <Image
                src={nut_tale_min_01}
                className="rounded mx-auto d-block miniature"
              />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <Image
                src={nut_tale_min_02}
                className="rounded mx-auto d-block miniature"
              />
            </Col>
            <Col md={6} className="leftCol">
              <Image
                src={nut_tale_min_03}
                className="rounded mx-auto d-block miniature"
              />
            </Col>
          </Row>

          {/*<img src={black_pine_min_02} className="miniature" />
              <img src={black_pine_min_03} className="miniature" />*/}
        </Container>
      </Animated>
    </div>
  );
}
