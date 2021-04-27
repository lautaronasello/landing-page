import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackNav() {
  return (
    <Navbar expand="lg" className="bg-nav shadow bg-gradient fixed-top">
      <Navbar.Brand href="/homepage">
        <FontAwesomeIcon
          className="d-inline-block align-top mx-3"
          style={{ width: "30", height: "30" }}
          icon={faArrowLeft}
        />
        <h4 className="d-inline-block m-0 ">Volver </h4>
        {/* <div
          alt="Volver"
          className="d-inline-block align-top"
          style={{ width: "30", height: "30" }}
        >
          {element}{" "}
        </div> */}
      </Navbar.Brand>
    </Navbar>
  );
}
