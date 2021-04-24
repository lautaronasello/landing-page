import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Who(props) {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      id="who"
      style={{ height: "70vh" }}
    >
      <Row>
        <Col
          className="p-3 rounded shadow"
          md={12}
          style={{ backgroundColor: "#FBE9E7" }}
        >
          <h3>{props.title}</h3>
          <p class="lead">{props.description}</p>{" "}
        </Col>
      </Row>
    </Container>
  );
}
