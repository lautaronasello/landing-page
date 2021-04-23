import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Who(props) {
  return (
    <Container className=" " style={{ height: "60vh" }}>
      <Row>
        <Col
          className="p-3 border border-dark rounded"
          md={12}
          id="who"
          style={{ backgroundColor: "#FBE9E7" }}
        >
          <h3>{props.title}</h3>
          <p class="lead">{props.description}</p>{" "}
        </Col>
      </Row>
    </Container>
  );
}
