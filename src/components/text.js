import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Text(props) {
  return (
    <Row>
      <Col md={3}></Col>
      <Col
        md={6}
        className="text-center p-3 shadow"
        style={{ background: "#ecd3c0" }}
      >
        <h3>{props.title} </h3>
        <p className="label">{props.secondaryText}</p>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
}
