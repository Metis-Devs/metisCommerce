import React from "react";

import Carousel from "react-bootstrap/Carousel";
import item1 from "../img/image1.png"
import item2 from "../img/img2.png"
import item3 from "../img/img3.png"

export const CarouselComponent = () => {
  return (
    <div className="carouselContainer w-100" style={{height: "340px", width:"100%"}}>
        <Carousel variant="dark" >
      <Carousel.Item style={{height: "340px", width:"100%"}}>
        <img
          className="d-block w-100"
          style={{ objectFit: "cover", height: "340px", width:"100%" }}
          src={item1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "340px"}}>
        <img
          className="d-block w-100 "
          src={item2}
          alt="Second slide"
          style={{ objectFit: "cover", height: "100%", width:"100%" }}
        />

        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "340px"}}>
        <img
          className="d-block w-100 "
          src={item3}
          alt="Third slide"
          style={{ objectFit: "cover", height: "100%" }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
