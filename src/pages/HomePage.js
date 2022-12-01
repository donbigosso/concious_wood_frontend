import React from "react";
import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { Animated } from "react-animated-css";
import PagePicture from "../components/PagePicture";
import { Container, Row, Col } from "react-bootstrap";

export default function HomePage(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <Container>
          <Row>
            <h2>
              <GetStringFromJSONFormat
                stringID="home_header"
                language={props.language}
              />
            </h2>
          </Row>
          <Row>
            <Col md={6} className="leftCol">
              <PagePicture imageName="mini_01" className="miniature300" />
            </Col>
            <Col md={6} className="rightCol ">
              <p title="Concious">
                <GetStringFromJSONFormat
                  stringID="home_par_01"
                  language={props.language}
                />
              </p>
              <p>
                <GetStringFromJSONFormat
                  stringID="home_par_02"
                  language={props.language}
                />
              </p>
              <p>
                <GetStringFromJSONFormat
                  stringID="home_par_03"
                  language={props.language}
                />
              </p>
            </Col>
          </Row>
        </Container>
      </Animated>
    </div>
  );
}
