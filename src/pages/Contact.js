import React from "react";
import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineMailOpen } from "react-icons/hi";
import PagePictureRemote from "../components/PagePictureRemote";

import { Animated } from "react-animated-css";

export default function Contact(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h2>
          <GetStringFromJSONFormat
            stringID="contact_header"
            language={props.language}
          />
        </h2>
        <div className="forTablesLists">
          <Row>
            <Col md={6}>
              <PagePictureRemote imageID="contact_pic" className="contactPic" />
            </Col>
            <Col md={6}>
              <Table bordered hover variant="dark">
                <tbody>
                  <tr>
                    <td>
                      <HiOutlineMailOpen />
                    </td>

                    <td>csw@consciouswood.com</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Animated>
    </div>
  );
}
