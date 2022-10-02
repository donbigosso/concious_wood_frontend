import React from "react";
import { Image } from "react-bootstrap";
export default function PagePicture(props) {
  const imageName = props.imageName;
  const imageFolder = process.env.PUBLIC_URL + "/data/assets/page_images/";
  const imagePath = imageFolder + imageName + ".jpg";
  const customizedClassNames =
    props.customClassName + " rounded mx-auto d-block miniature";
  return <Image src={imagePath} className={customizedClassNames} />;
}
