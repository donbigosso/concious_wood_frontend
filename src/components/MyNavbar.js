import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import GetStringFromJSON from "../components/GetStringFromJSON";

import { Animated } from "react-animated-css";

export default function MyNavbar({
  home,
  about,
  projects,
  contact,
  terms,
  ...props
}) {
  return (
    <>
      <style type="text/css">
        {`
    .navbar-dark {
      background-color: #251207;
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
            <Nav.Link className="pointer" onClick={projects}>
              <GetStringFromJSON
                stringID="projects_header"
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
              <NavDropdown.Item className="pointer">
                <GetStringFromJSON
                  stringID="black_pine_header"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer">
                <GetStringFromJSON
                  stringID="rental_terms"
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
