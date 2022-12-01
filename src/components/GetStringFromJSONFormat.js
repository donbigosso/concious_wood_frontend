import axios from "axios";
import React, { useState, useEffect } from "react";
import TextFormatter from "./TextFormatter";
import NewTextFormatter from "./NewTextFormatter";

export default function GetStringFromJSONFormat(props) {
  const language = props.language;

  // const enDataPAck = process.env.PUBLIC_URL + "/data/en_EN.json"; //this to be changed to a proper location
  // const plDataPAck = process.env.PUBLIC_URL + "/data/pl_PL.json";
  // const deDataPAck = process.env.PUBLIC_URL + "/data/de_DE.json";

  const enDataPAck = "http://consciouswood.com/API/en_EN.json"; //this to be changed to a proper location
  const plDataPAck = "http://consciouswood.com/API/pl_PL.json";
  const deDataPAck = "http://consciouswood.com/API/de_DE.json";

  const newNoCache = Math.round(Date.now() / 100000);

  const newURL = (lang) => {
    return lang === "EN"
      ? `${enDataPAck}?noCache=${newNoCache}`
      : lang === "PL"
      ? `${plDataPAck}?noCache=${newNoCache}`
      : lang === "DE"
      ? `${deDataPAck}?noCache=${newNoCache}`
      : "";
  };

  const [enDataPack, setENDataPack] = useState([]);
  const [deDataPack, setDEDataPack] = useState([]);
  const [plDataPack, setPLDataPack] = useState([]);

  const getNewDataPack = (lang) => {
    // fetches data from the chosen language JSON file
    if (lang === "EN") {
      axios
        .get(newURL("EN"))
        .then((res) => {
          const imported = res.data;
          setENDataPack(imported);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (lang === "DE") {
      axios
        .get(newURL("DE"))
        .then((res) => {
          const imported = res.data;
          setDEDataPack(imported);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (lang === "PL") {
      axios
        .get(newURL("PL"))
        .then((res) => {
          const imported = res.data;
          setPLDataPack(imported);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //fetches data from json file at the load

  useEffect(() => {
    getNewDataPack("EN");
    getNewDataPack("DE");
    getNewDataPack("PL");
  }, []);

  const stringID = props.stringID;
  //separate lists of keys and values must be made as map is not working on key=>value (not indexed) arrays

  const newKeyArray = Object.keys(enDataPack);

  const enValueArray = Object.values(enDataPack);
  const deValueArray = Object.values(deDataPack);
  const plValueArray = Object.values(plDataPack);

  const getANewString = (stringLabel) => {
    var string = `fetching ${stringID}`;
    if (language === "EN") {
      newKeyArray.forEach((JSONlabel, index) => {
        if (stringLabel === JSONlabel) {
          if (
            //condition for a subscripted value
            stringLabel === "moto_eng_cap_unit" &&
            (language === "DE" || language === "PL")
          ) {
            string = (
              <>
                {
                  enValueArray[index] //html tags cannot be put in JSON file
                }
                <sup>3</sup>
              </>
            );
          } else {
            string = enValueArray[index];
          }
        }
      });
    } else if (language === "DE") {
      newKeyArray.forEach((JSONlabel, index) => {
        if (stringLabel === JSONlabel) {
          if (
            //condition for a subscripted value
            stringLabel === "moto_eng_cap_unit" &&
            (language === "DE" || language === "PL")
          ) {
            string = (
              <>
                {
                  deValueArray[index] //html tags cannot be put in JSON file
                }
                <sup>3</sup>
              </>
            );
          } else {
            string = deValueArray[index];
          }
        }
      });
    } else if (language === "PL") {
      newKeyArray.forEach((JSONlabel, index) => {
        if (stringLabel === JSONlabel) {
          if (
            //condition for a subscripted value
            stringLabel === "moto_eng_cap_unit" &&
            (language === "DE" || language === "PL")
          ) {
            string = (
              <>
                {
                  plValueArray[index] //html tags cannot be put in JSON file
                }
                <sup>3</sup>
              </>
            );
          } else {
            string = plValueArray[index];
          }
        }
      });
    }
    return string;
  };

  return <NewTextFormatter>{getANewString(stringID)}</NewTextFormatter>;
}
