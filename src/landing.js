import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Container
      className="text-center d-flex align-items-center justify-content-center mx-auto"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col sm={12} md={12} lg={12} xl={12} className="px-4">
          <h1 className="display-4">MenosCAoS X FAVOR</h1>
          <p className="lead mt-5">
            Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀️ 📚 Organización bajada a tierra 🌏 <br />
            📍 Córdoba Capital
          </p>
          <Link to="homepage">
            <Button variant="outline-secondary">Entrar</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
