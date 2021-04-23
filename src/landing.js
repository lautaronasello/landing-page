import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h1 className="display-1">
          <strong>MenosCAoS</strong>
          <mark>X FAVOR</mark>
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
      </div>
    </Container>
  );
}
