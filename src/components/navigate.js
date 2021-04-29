import { React } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navigate() {
  return (
    <Navbar
      expand="lg"
      className="bg-nav shadow bg-gradient fixed-top"
      style={{ background: "#ecd3c0" }}
    >
      <Navbar.Brand href="/" className="ml-2 hand pt-3 my-0">
        <h4 className="font-size">menos caos por favor</h4>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-4">
          <Nav.Link>
            <Link
              activeClass="active"
              to="inicio"
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
          <Nav.Link>
            <Link
              activeClass="active"
              to="buy"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              QUIERO COMPRAR
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="learn"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              QUIERO APRENDER
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              activeClass="active"
              to="wholesalers"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              MAYORISTAS
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
