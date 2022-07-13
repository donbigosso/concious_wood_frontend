import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactPic from "../images/contact.jpg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { Animated } from "react-animated-css";

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
              <img src={ContactPic} className="contactPic"></img>
            </Col>
            <Col md={6}>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <td>
                      <HiOutlineMailOpen />
                    </td>

                    <td>tubędzie_wasz@email.com</td>
                  </tr>
                  <tr>
                    <td>
                      <BsWhatsapp />
                    </td>

                    <td>0-700-772-772</td>
                  </tr>
                  <tr>
                    <td>
                      <FiMapPin />
                    </td>

                    <td>Ul. Lenina, Mińsk</td>
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
