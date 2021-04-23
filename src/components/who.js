import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Who(props) {
  return (
    <Container id="who" style={{ height: "60vh" }}>
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
