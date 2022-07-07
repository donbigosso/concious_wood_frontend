import axios from "axios";
import React, { useState, useEffect } from "react";

export default function GetStringFromJSON(props) {
  const language = props.language;
  /*const enDataPAck = "http://motorbikes.polafri.pl/api/en_EN.json"; //this to be changed to a proper location
  const plDataPAck = "http://motorbikes.polafri.pl/api/pl_PL.json";
  const deDataPAck = "http://motorbikes.polafri.pl/api/de_DE.json"; */

  const enDataPAck = "/data/en_EN.json"; //this to be changed to a proper location
  const plDataPAck = "/data/pl_PL.json";
  const deDataPAck = "/data/de_DE.json";

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

  return <>{getANewString(stringID)}</>;
}
