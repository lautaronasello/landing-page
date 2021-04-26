import React from "react";
import { Carousel } from "react-bootstrap";
import help from "../help.jpg";
import contact from "../contact.jpg";
import gangas from "../gangas.jpg";

export default function Pagination() {
  return (
    <Carousel className="carousel-dark carousel-fade">
      <Carousel.Item className="text-center m-0">
        <img
          className="shadow"
          src={help}
          alt="Help you"
          style={{
            width: "22.5rem",
            height: "30rem",
            border: "1px solid #212121",
            borderRadius: "10px",
          }}
        />
        <Carousel.Caption>
          <h3
            className="mt-5 text-light d-inline mb-2 px-1"
            style={{ backgroundColor: "black" }}
          >
            TE AYUDAMOS
          </h3>{" "}
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black", width: "75%" }}
          >
            Como decia Hannah Montana, "𝚕𝚊 𝚟𝚒𝚍𝚊 𝚎𝚜 𝚌𝚞𝚎𝚜𝚝𝚊
          </p>
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black" }}
          >
            𝚊𝚛𝚛𝚒𝚋𝚊 𝚙𝚎𝚛𝚘 𝚕𝚊 𝚟𝚒𝚜𝚝a 𝚎𝚜 𝚐𝚎𝚗𝚒𝚊𝚕"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center m-0">
        <img
          className="shadow img-style"
          src={contact}
          alt="contact"
          style={{
            height: "30rem",
            width: "22.5rem",
            border: "1px solid #212121",
            borderRadius: "10px",
          }}
        />
        <Carousel.Caption>
          <h3
            className="mt-5 text-light d-inline mb-2 px-1"
            style={{ backgroundColor: "black" }}
          >
            CONTACTO
          </h3>{" "}
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black", width: "75%" }}
          >
            Como decia Hannah Montana, "𝚕𝚊 𝚟𝚒𝚍𝚊 𝚎𝚜 𝚌𝚞𝚎𝚜𝚝𝚊
          </p>
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black" }}
          >
            𝚊𝚛𝚛𝚒𝚋𝚊 𝚙𝚎𝚛𝚘 𝚕𝚊 𝚟𝚒𝚜𝚝a 𝚎𝚜 𝚐𝚎𝚗𝚒𝚊𝚕"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center m-0">
        <img
          className="shadow"
          src={gangas}
          alt="Help you"
          style={{
            width: "22.5rem",
            height: "30rem",
            border: "1px solid #212121",
            borderRadius: "10px",
          }}
        />
        <Carousel.Caption>
          <h3
            className="mt-5 text-light d-inline mb-2 px-1"
            style={{ backgroundColor: "black" }}
          >
            OFERTAS
          </h3>{" "}
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black", width: "75%" }}
          >
            Como decia Hannah Montana, "𝚕𝚊 𝚟𝚒𝚍𝚊 𝚎𝚜 𝚌𝚞𝚎𝚜𝚝𝚊
          </p>
          <p
            className="text-light text-break d-inline-block px-1 m-1"
            style={{ backgroundColor: "black" }}
          >
            𝚊𝚛𝚛𝚒𝚋𝚊 𝚙𝚎𝚛𝚘 𝚕𝚊 𝚟𝚒𝚜𝚝a 𝚎𝚜 𝚐𝚎𝚗𝚒𝚊𝚕"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
