import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Products(props) {
  return (
    <Card
      className="text-center aling-items-center shadow"
      style={{ width: "18rem", height: "35rem" }}
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
  );
}
