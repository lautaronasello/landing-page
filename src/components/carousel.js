import React from "react";
import { Carousel, Container } from "react-bootstrap";
import logo from "../logo.png";
export default function Pagination() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item className="text-center m-0">
          <img
            className=" w-50"
            src={logo}
            alt="First slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <h3 className="mt-5 text-body">First slide label</h3>
            <p className="text-secondary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center m-0">
          <img
            className=" w-50"
            src={logo}
            alt="Second slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <h3 className="mt-5 text-body">Second slide label</h3>
            <p className="text-secondary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-center m-0">
          <img
            className=" w-50"
            src={logo}
            alt="Third Slide"
            style={{ height: "50vh" }}
          />
          <Carousel.Caption>
            <h3 className="mt-5 text-body">Third slide label</h3>
            <p className="text-secondary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
