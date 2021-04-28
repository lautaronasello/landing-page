import React from "react";
import { Row, Col } from "react-bootstrap";

export default function InfoCard(props) {
  return (
    <Row className="m-auto justify-content-center ">
      <Col
        className="rounded shadow p-3"
        md={12}
        style={{ backgroundColor: "#FBE9E7" }}
      >
        <h3>{props.title}</h3>
        <p class="lead">{props.description}</p>{" "}
      </Col>
    </Row>
  );
}
