import "./App.css";
import MyCarousel from "./components/MyCarousel";
import MyNavbar from "./components/MyNavbar";
import Container from "react-bootstrap/Container";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const getLanguageCookie = () => {
    let lng = getCookie("language");
    if (lng != "") {
      return lng;
    } else {
      return "EN";
    }
  };

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
  console.log(document.cookie);
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
