import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Mini02 from "../images/mini_02.jpg";
export default function AboutUs(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <Container>
          <Row>
            <h2>
              <GetStringFromJSONFormat
                stringID="about_header"
                language={props.language}
              />
            </h2>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <p>
                <GetStringFromJSONFormat
                  stringID="about_par_01"
                  language={props.language}
                />
              </p>
              <p>
                <GetStringFromJSONFormat
                  stringID="about_par_02"
                  language={props.language}
                />
              </p>
              <p>
                <GetStringFromJSONFormat
                  stringID="about_par_03"
                  language={props.language}
                />
              </p>
              <p>
                <GetStringFromJSONFormat
                  stringID="about_par_04"
                  language={props.language}
                />
              </p>
            </Col>
            <Col md={6} className="rightCol ">
              <Image
                src={Mini02}
                className="rounded mx-auto d-block miniature"
              />
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
