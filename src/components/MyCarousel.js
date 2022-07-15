import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImage01 from "../images/carouselImage01.jpg";
import carouselImage02 from "../images/carouselImage02.jpg";
import carouselImage03 from "../images/carouselImage03.jpg";
import carouselImage04 from "../images/carouselImage04.jpg";
import carouselImage05 from "../images/carouselImage05.jpg";
import carouselImage06 from "../images/carouselImage06.jpg";
import PolandFlag from "../images/poland.png";
import GermanyFlag from "../images/germany.png";
import BritainFlag from "../images/union-jack.png";
export default function MyCarousel({ english, german, polish, ...props }) {
  const drawEnFalgFrame = () => {
    return props.language === "EN"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawDeFalgFrame = () => {
    return props.language === "DE"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawPlFalgFrame = () => {
    return props.language === "PL"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  return (
    <div>
      {/*<div className="newLgField">
        <img
          className="flag"
          src={BritainFlag}
          onClick={english}
          style={Object.assign(drawEnFalgFrame())}
        />
        <img
          className="flag"
          src={GermanyFlag}
          onClick={german}
          style={Object.assign(drawDeFalgFrame())}
        />
        <img
          className="flag"
          src={PolandFlag}
          onClick={polish}
          style={Object.assign(drawPlFalgFrame())}
        />
  </div> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage01}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage02}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage03}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage04}
            alt="Fourth slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage05}
            alt="Fifth slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage06}
            alt="Sixth slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
