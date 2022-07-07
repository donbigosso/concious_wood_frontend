import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import GetStringFromJSON from "../components/GetStringFromJSON";

import { Animated } from "react-animated-css";

export default function MyNavbar({
  home,
  about,
  bikes,
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
          <GetStringFromJSON stringID="home_label" language={props.language} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="pointer" onClick={about}>
              <GetStringFromJSON
                stringID="about_label"
                language={props.language}
              />
            </Nav.Link>

            <NavDropdown
              title={
                <GetStringFromJSON
                  stringID="rental_label"
                  language={props.language}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="pointer" onClick={bikes}>
                <GetStringFromJSON
                  stringID="rental_our_bikes"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={terms}>
                <GetStringFromJSON
                  stringID="rental_terms"
                  language={props.language}
                />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="pointer" onClick={contact}>
              <GetStringFromJSON
                stringID="contact_label"
                language={props.language}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
