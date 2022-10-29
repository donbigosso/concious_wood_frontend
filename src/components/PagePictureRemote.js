import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
export default function PagePictureRemote(props) {
  const newNoCache = Math.round(Date.now() / 100000);
  const pictureFilePath =
    process.env.PUBLIC_URL + "/data/images.json?noCache=" + { newNoCache };
  const imageID = props.imageID;
  const imageName = props.imageName;
  const imageFolder = process.env.PUBLIC_URL + "/data/assets/page_images/";
  const imagePath = imageFolder + imageName + ".jpg";
  const customizedClassNames =
    props.className + " rounded mx-auto d-block miniature";

  const [imageData, setImageData] = useState([]);

  const getDataFromFile = () => {
    axios
      .get(pictureFilePath)
      .then((res) => {
        const response = res.data;
        setImageData(response[imageID]);
        console.log(response[imageID]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Image src={imagePath} className={customizedClassNames} />
      <button onClick={getDataFromFile}>Test</button>
    </>
  );
}
