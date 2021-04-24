import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Products(props) {
  return (
    <Card className="text-center mb-3 shadow" style={{ height: "35rem" }}>
      <Card.Img className="mt-5" variant="top" src={props.img} />
      <Card.Body className="">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="outline-secondary">{props.btn}</Button>
      </Card.Body>
    </Card>
  );
}
