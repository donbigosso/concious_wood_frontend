//import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

export default function PictureFrame(props) {
  /* const picturePath = "http://motorbikes.polafri.pl/api/assets/";
  const dataPath = "http://motorbikes.polafri.pl/api/motorbikeList.json"; */

  const picturePath = "/data/assets/";
  const dataPath = "/data/motorbikeList.json";

  const newNoCache = Math.round(Date.now() / 100000);
  const url = `${dataPath}?noCache=${newNoCache}`;
  const [dataPack, setDataPack] = useState([]);
  const getDataPack = () => {
    // fetches data from the chosen language JSON file
    axios
      .get(url)
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

  const motoid = props.motoid;
  const showMotoPicName = () => {
    if (typeof dataPack[motoid] === "undefined") {
      return "blank";
    } else {
      return dataPack[motoid].pic;
    }
  };

  const showMotoName = () => {
    if (typeof dataPack[motoid] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[motoid].name;
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h3>{showMotoName()}</h3>
      </Modal.Header>
      <Modal.Body>
        <img
          className="biggerPic"
          src={picturePath + showMotoPicName() + ".jpg"}
          alt="picture"
        />
      </Modal.Body>
    </Modal>
  );
}
