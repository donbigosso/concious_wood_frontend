import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";
import Table from "react-bootstrap/Table";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { Animated } from "react-animated-css";

export default function Contact(props) {
  return (
    <div className="brightBeckground">
      <Animated animationIn="fadeIn" isVisible={true}>
        <h1>
          <GetStringFromJSON
            stringID="contact_label"
            language={props.language}
          />
        </h1>
        <div className="forTablesLists">
          <Table bordered hover>
            <tbody>
              <tr>
                <td>
                  <HiOutlineMailOpen />
                </td>

                <td>motrobikesgambia@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <BsWhatsapp />
                </td>

                <td>(+220) 737 80 95</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Animated>
    </div>
  );
}
