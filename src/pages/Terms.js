import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import ListGroup from "react-bootstrap/ListGroup";
import { Animated } from "react-animated-css";

export default function Terms(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h1>
          <GetStringFromJSON
            stringID="rental_terms"
            language={props.language}
          />
        </h1>
        <div className="forTablesLists">
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_1" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_2" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_3" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_4" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_5" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_6" language={props.language} />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <GetStringFromJSON stringID="rules_7" language={props.language} />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Animated>
    </div>
  );
}
