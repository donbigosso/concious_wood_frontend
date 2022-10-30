import React from "react";

import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Image } from "react-bootstrap";
import PagePictureRemote from "../components/PagePictureRemote";
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
              <PagePictureRemote imageID="nut_tale_01" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <PagePictureRemote imageID="nut_tale_02" />
            </Col>
            <Col md={6} className="leftCol">
              <PagePictureRemote imageID="nut_tale_03" />
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
