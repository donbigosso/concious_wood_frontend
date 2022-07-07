import React, { useState, useEffect } from "react";
import MotorbikeCard from "../components/MotorbikeCard";
import { Animated } from "react-animated-css";
import axios from "axios";

export default function Bikes(props) {
  //const dataPath = "http://localhost/my/motorbikes/motorbikeList.json";
  // const dataPath = "http://motorbikes.polafri.pl/api/motorbikeList.json";
  const dataPath = "/data/motorbikeList.json";
  const newNoCache = Math.round(Date.now() / 100000);
  const url = `${dataPath}?noCache=${newNoCache}`;
  const [motoList, setMotoList] = useState([]);
  const getMotoAmount = () => {
    // fetches data from the chosen language JSON file
    axios
      .get(url)
      .then((res) => {
        const imported = res.data;
        setMotoList(imported);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //fetches data from json file at the load
  useEffect(() => {
    getMotoAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(`Details of motorbikes in the database:${motoList[0].name}`);

  const createMotoCards = (element, index) => {
    // write something
    if (typeof motoList[0] === "undefined") {
      return "Fetching data...";
    } else {
      return (
        <MotorbikeCard index={index} key={index} language={props.language} />
      );
    }
  };

  return (
    <div>
      <Animated animationIn="fadeIn" isVisible={true}>
        {motoList.map(createMotoCards)}
      </Animated>
    </div>
  );
}
