import React from "react";
import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col } from "react-bootstrap";
import PagePictureRemote from "../components/PagePictureRemote";
export default function Oak(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <Container>
          <Row>
            <h2>
              <GetStringFromJSONFormat
                stringID="oak_header"
                language={props.language}
              />
            </h2>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <p>
                <GetStringFromJSONFormat
                  stringID="oak_par_01"
                  language={props.language}
                />
              </p>
            </Col>
            <Col md={6} className="rightCol ">
              <PagePictureRemote imageID="oak_01" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <PagePictureRemote imageID="oak_02" />
            </Col>
            <Col md={6} className="leftCol">
              <PagePictureRemote imageID="oak_03" />
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
