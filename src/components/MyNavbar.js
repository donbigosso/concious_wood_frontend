import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import GetStringFromJSON from "../components/GetStringFromJSON";

import { Animated } from "react-animated-css";

export default function MyNavbar({
  home,
  about,
  blackPine,
  nutTale,
  oak,
  contact,
  terms,
  ...props
}) {
  return (
    <>
      <style type="text/css">
        {`
    .navbar-dark {
      background-color: #00000;
      color: white;
    }
   
    `}
      </style>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand onClick={home} className="pointer">
          <GetStringFromJSON stringID="home_header" language={props.language} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="pointer" onClick={about}>
              <GetStringFromJSON
                stringID="about_header"
                language={props.language}
              />
            </Nav.Link>

            <NavDropdown
              title={
                <GetStringFromJSON
                  stringID="projects_header"
                  language={props.language}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="pointer" onClick={blackPine}>
                <GetStringFromJSON
                  stringID="black_pine_header"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={nutTale}>
                <GetStringFromJSON
                  stringID="nut_tale_header"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={oak}>
                <GetStringFromJSON
                  stringID="oak_header"
                  language={props.language}
                />
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="pointer">
              <GetStringFromJSON
                stringID="contact_header"
                language={props.language}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
