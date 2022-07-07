import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import GetStringFromJSON from "./GetStringFromJSON";
import Table from "react-bootstrap/Table";
import PictureFrame from "../components/PictureFrame";

function MotorbikeCard(props) {
  /* const picturePath = "http://motorbikes.polafri.pl/api/assets/";
  const dataPath = "http://motorbikes.polafri.pl/api/motorbikeList.json"; */

  const picturePath = "/data/assets/";
  const dataPath = "/data/motorbikeList.json";

  const newNoCache = Math.round(Date.now() / 100000);
  const url = `${dataPath}?noCache=${newNoCache}`;
  const [dataPack, setDataPack] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [galleryPic, setGalleryPic] = useState(0); //number represents the index in motobike database
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMotoName = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[props.index].name;
    }
  };

  const getMotoPic = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[props.index].pic;
    }
  };

  const getMotoEngCap = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[props.index].engine;
    }
  };

  const getMotoProdDate = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[props.index].production_date;
    }
  };

  const getMotoPrice = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return "Fetching data";
    } else {
      return dataPack[props.index].price;
    }
  };

  const setGalleryIndex = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return 0;
    } else {
      return props.index;
    }
  };

  const getMotoAvailability = () => {
    if (typeof dataPack[props.index] === "undefined") {
      return true;
    } else {
      return dataPack[props.index].availability;
    }
  };
  const space = " ";

  const launchModal = (motoIndex) => {
    //moto index is responsible for displaying the correct picture according to the index in database
    setGalleryPic(motoIndex);
    setModalShow(true);
  };

  return (
    <>
      <Card
        style={{
          width: "22rem",
          float: "left",
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
        }}
      >
        <Card.Img
          className="smallPic"
          variant="top"
          src={picturePath + getMotoPic() + ".jpg"}
          onClick={() => launchModal(setGalleryIndex())}
        />
        <Card.Body>
          <Card.Title>{getMotoName()}</Card.Title>

          <Table bordered hover>
            <tbody>
              <tr>
                <td>
                  <GetStringFromJSON
                    stringID="moto_eng_cap"
                    language={props.language}
                  />
                </td>

                <td>
                  {getMotoEngCap()}
                  {space}
                  <GetStringFromJSON
                    stringID="moto_eng_cap_unit"
                    language={props.language}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <GetStringFromJSON
                    stringID="moto_production"
                    language={props.language}
                  />
                </td>

                <td>{getMotoProdDate()}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <GetStringFromJSON
                    stringID="moto_price"
                    language={props.language}
                  />
                </td>

                <td>{getMotoPrice()}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <GetStringFromJSON
                    stringID="moto_availability"
                    language={props.language}
                  />
                </td>

                <td>
                  {getMotoAvailability() ? (
                    <GetStringFromJSON
                      stringID="moto_availability_true"
                      language={props.language}
                    />
                  ) : (
                    <GetStringFromJSON
                      stringID="moto_availability_false"
                      language={props.language}
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <PictureFrame
        motoid={galleryPic}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MotorbikeCard;
