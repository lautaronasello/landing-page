import { React } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigate() {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <Navbar expand="lg" className="bg-nav shadow bg-gradient fixed-top">
      <Navbar.Brand onClick={scrollToTop} className="mx-3 hand">
        MenosCAoSxFAVOR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              activeClass="active"
              to="who"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              INICIO
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="who"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              QUIENES SOMOS
            </Link>
          </Nav.Link>
          <Nav.Link href="#home">
            <Link
              activeClass="active"
              to="who"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              PRODUCTOS
            </Link>
          </Nav.Link>
          <Nav.Link href="#home">
            <Link
              activeClass="active"
              to="who"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              CONTACTO
            </Link>
          </Nav.Link>
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
