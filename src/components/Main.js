import MyCarousel from "../components/MyCarousel";
import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { getCookie, getLanguageCookie, generatePage } from "../functions";

import React, { useState, useEffect } from "react";

function App() {
  const setCookie = (cookieName, cvalue, exDays) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
  };

  // setCookie("language", "DE", 14);

  const changeLanguage = (lng) => {
    setCookie("language", lng, 14);
    setPageLanguage(getLanguageCookie());
  };

  const [language, setPageLanguage] = useState(getLanguageCookie());
  const [pageToShow, setpage] = useState("home");
  const setLanguage = (languageCode) => {
    setPageLanguage(languageCode);
    //document.cookie = "language={languageCode}";
  };

  const generatePage = (pageName) => {
    if (pageName === "home") {
      return <HomePage language={language} />;
    } else if (pageName === "about") {
      return <AboutUs language={language} />;
    } else if (pageName === "projects") {
      return <Projects language={language} />;
    } else if (pageName === "contact") {
      return <Contact language={language} />;
    }
  };

  return (
    <div className="App">
      <MyCarousel
        language={language}
        english={() => changeLanguage("EN")}
        german={() => changeLanguage("DE")}
        polish={() => changeLanguage("PL")}
      />
      <div className="navBackground">
        <Container>
          <MyNavbar
            language={language}
            english={() => changeLanguage("EN")}
            german={() => changeLanguage("DE")}
            polish={() => changeLanguage("PL")}
            home={() => setpage("home")}
            about={() => setpage("about")}
            projects={() => setpage("projects")}
            terms={() => setpage("terms")}
            contact={() => setpage("contact")}
          />
        </Container>
      </div>
      <Container>
        <div>{generatePage(pageToShow)}</div>
      </Container>
    </div>
  );
}

export default App;
