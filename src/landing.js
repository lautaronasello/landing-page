import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col className="text-center">
          <h1 className="display-3">
            <strong>MenosCAoS</strong> X FAVOR
          </h1>
          <p className="lead mt-5">
            Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀️ 📚 Organización bajada a tierra 🌏 📍
            Córdoba Capital
          </p>
          <Link to="homepage">
            <Button variant="outline-secondary" className="m-3">
              Entrar
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
