import axios from "axios";
import React, { useState, useEffect } from "react";

export default function GetStringFromJSON(props) {
  const language = props.language;
  const enDataPAck = "http://motorbikes.polafri.pl/api/en_EN.json"; //this to be changed to a proper location
  const plDataPAck = "http://motorbikes.polafri.pl/api/pl_PL.json";
  const deDataPAck = "http://motorbikes.polafri.pl/api/de_DE.json";
  const noCache = Date.now().toString(16); //date stamp - in order not to use cached file

  const url = () => {
    // creates a path to JSON file acoording to the language chosen in the parent element
    return language === "EN"
      ? `${enDataPAck}?noCache=${noCache}`
      : language === "PL"
      ? `${plDataPAck}?noCache=${noCache}`
      : language === "DE"
      ? `${deDataPAck}?noCache=${noCache}`
      : "";
  };

  const [dataPack, setDataPack] = useState([]);
  const getDataPack = () => {
    // fetches data from the chosen language JSON file
    axios
      .get(url())
      .then((res) => {
        const imported = res.data;
        setDataPack(imported);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //fetches data from json file at the load
  useEffect(() => {
    getDataPack();
  }, []);
  const stringID = props.stringID;
  //separate lists of keys and values must be made as map is not working on key=>value (not indexed) arrays
  const keyArray = Object.keys(dataPack);
  const valueArray = Object.values(dataPack);

  //compares the label provided in the props with labels in JSON and returns value accordingly if label not found returns : "unknown string"
  const getAString = (stringLabel) => {
    var string = `fetching ${stringID}`;
    keyArray.forEach((JSONlabel, index) => {
      if (stringLabel === JSONlabel) {
        if (
          //condition for a subscripted value
          stringLabel === "moto_eng_cap_unit" &&
          (language === "DE" || language === "PL")
        ) {
          string = (
            <>
              {
                valueArray[index] //html tags cannot be put in JSON file
              }
              <sup>3</sup>
            </>
          );
        } else {
          string = valueArray[index];
        }
      }
    });
    return string;
  };

  return <>{getAString(stringID)}</>;
}
