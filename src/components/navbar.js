import { React } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigate() {
  return (
    <Navbar expand="lg" className="bg-nav shadow bg-gradient fixed-top">
      <Navbar.Brand href="#home" className="mx-3">
        MenosCAoSxFAVOR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">INICIO</Nav.Link>
          <Nav.Link href="#link">PRODUCTOS</Nav.Link>
          <Nav.Link href="#link">QUIENES SOMOS</Nav.Link>
          <Nav.Link href="#link">CONTACTO</Nav.Link>
        </Nav>
        <a
          href="https://www.instagram.com/menoscaosporfavor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            width={45}
            height={45}
            className="mr-3"
            src="https://image.flaticon.com/icons/png/512/2175/2175198.png"
            alt="Instagram MenosCaos"
          />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
