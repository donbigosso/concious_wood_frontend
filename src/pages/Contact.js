import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PagePicture from "../components/PagePicture";

import { HiOutlineMailOpen } from "react-icons/hi";
import PagePictureRemote from "../components/PagePictureRemote";
import { BsWhatsapp } from "react-icons/bs";
import { Animated } from "react-animated-css";
const testLink = process.env.PUBLIC_URL + "/API.php";
export default function Contact(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h2>
          <GetStringFromJSON
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
                  <tr>
                    <td>
                      <BsWhatsapp />
                    </td>

                    <td>0-700-772-772</td>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>
                      <a href={testLink}>Link</a>
                    </td>
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
