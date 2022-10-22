import React from "react";

import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col } from "react-bootstrap";
import PagePicture from "../components/PagePicture";
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
            <Col md={6} className="rightCol">
              <PagePicture imageName="black_pine_min_01" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <PagePicture imageName="black_pine_min_02" />
            </Col>
            <Col md={6} className="rightCol ">
              <PagePicture imageName="black_pine_min_03" />
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
