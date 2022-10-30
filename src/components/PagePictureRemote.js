import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
export default function PagePictureRemote(props) {
  const newNoCache = Math.round(Date.now() / 100000);
  const pictureFilePath =
    process.env.PUBLIC_URL + "/data/images.json?noCache=" + { newNoCache };
  const imageID = props.imageID;
  const customizedClassNames =
    props.className + " rounded mx-auto d-block miniature";

  const [imageData, setImageData] = useState([]);
  const [imageState, setImageState] = useState(0); // 0-loadning, 1-loaded, 2-not found
  const getDataFromFile = () => {
    axios
      .get(pictureFilePath)
      .then((res) => {
        const response = res.data;

        setImageData(response);
        if (response[imageID] !== undefined) {
          setImageState(1);
        } else {
          setImageState(2);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDataFromFile();
  }, []);

  return imageState === 0 ? (
    <>
      <div className="imageLoader rounded mx-auto d-block miniature centerContent">
        <div>
          <Spinner animation="border" />
          Loading picture...
        </div>
      </div>
    </>
  ) : imageState === 1 ? (
    <>
      <Image
        src={imageData["image_folder"] + imageData[imageID]}
        className={customizedClassNames}
      />
    </>
  ) : imageState === 2 ? (
    <>
      <div className="imageLoader rounded mx-auto d-block miniature centerContent">
        <div className="redText">Image "{props.imageID}" not found...</div>
      </div>
    </>
  ) : (
    <div className="imageLoader rounded mx-auto d-block miniature centerContent">
      <div className="redText">"Unknown error..."</div>
    </div>
  );
}
