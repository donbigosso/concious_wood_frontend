import React from "react";
// import GetStringFromJSON from "../components/GetStringFromJSON";

export default function Test(props) {
  const setCookie = (cookieName, cvalue, exDays) => {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
  };

  setCookie("language", "german", 14);

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

  return (
    <div className="brightBeckground">
      <h1>Test page</h1>
      <span
        className="cookieCheck"
        onClick={() => {
          console.log(document.cookie);
        }}
      >
        Check cookies
      </span>
      <p>{getCookie("choroba")}</p>
    </div>
  );
}
