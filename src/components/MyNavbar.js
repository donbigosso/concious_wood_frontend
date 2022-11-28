import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import GetStringFromJSONFormat from "../components/GetStringFromJSONFormat";
import { BsGlobe } from "react-icons/bs";

export default function MyNavbar({
  home,
  about,
  blackPine,
  nutTale,
  oak,
  contact,
  terms,
  lang,
  english,
  polish,
  german,
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
          <GetStringFromJSONFormat
            stringID="home_header"
            language={props.language}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="pointer" onClick={about}>
              <GetStringFromJSONFormat
                stringID="about_header"
                language={props.language}
              />
            </Nav.Link>

            <NavDropdown
              title={
                <GetStringFromJSONFormat
                  stringID="projects_header"
                  language={props.language}
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="pointer" onClick={blackPine}>
                <GetStringFromJSONFormat
                  stringID="black_pine_header"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={nutTale}>
                <GetStringFromJSONFormat
                  stringID="nut_tale_header"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={oak}>
                <GetStringFromJSONFormat
                  stringID="oak_header"
                  language={props.language}
                />
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="pointer" onClick={contact}>
              <GetStringFromJSONFormat
                stringID="contact_header"
                language={props.language}
              />
            </Nav.Link>
            <NavDropdown
              className="pointer"
              onClick={lang}
              title={
                <>
                  <BsGlobe />
                  <GetStringFromJSONFormat
                    stringID="language_menu"
                    language={props.language}
                  />
                </>
              }
            >
              <NavDropdown.Item className="pointer" onClick={english}>
                <GetStringFromJSONFormat
                  stringID="lng_eng"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={polish}>
                <GetStringFromJSONFormat
                  stringID="lng_pol"
                  language={props.language}
                />
              </NavDropdown.Item>
              <NavDropdown.Item className="pointer" onClick={german}>
                <GetStringFromJSONFormat
                  stringID="lng_ger"
                  language={props.language}
                />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
