import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="text-center pt-3 pb-5">
      <Col>
        <p>
          Team Menos Caos por Favor - 2021 -{" "}
          <a
            href="https://www.instagram.com/menoscaosporfavor/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-dark"
          >
            @menoscaosporfavor
          </a>{" "}
        </p>
      </Col>
    </Row>
  );
}
