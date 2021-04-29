import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Text(props) {
  const { titleText, secondaryText } = props;
  return (
    <Row className="justify-content-center align-items-center">
      <Col
        md={12}
        className="text-center p-3 shadow"
        style={{ background: "#fff" }}
      >
        <h4>{titleText} </h4>
        <p className="label">{secondaryText}</p>
      </Col>
    </Row>
  );
}
