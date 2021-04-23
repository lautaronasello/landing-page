import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Products(props) {
  return (
    <Card className="text-center  shadow" style={{ height: "35rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
  );
}
