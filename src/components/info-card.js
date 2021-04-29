import React from "react";
import { Row, Col } from "react-bootstrap";

export default function InfoCard(props) {
  const { title, subtitle, backgroundColor, boxShadow, color } = props;
  const style = {
    backgroundColor: backgroundColor,
    boxShadow: boxShadow,
  };

  const letra = {
    color: color,
  };
  return (
    <Row className="justify-content-center">
      <Col className="rounded p-3 mb-2" md={12} style={style}>
        <h3>{title}</h3>
        <p style={letra} className="lead">
          {subtitle}
        </p>
      </Col>
    </Row>
  );
}
