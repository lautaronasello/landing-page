import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
export default function Contact() {
  return (
    <Container>
      <Row>
        <Col className="text-center m-5">
          <h1 className="display-3">Contacto</h1>
          <p className="text-start lead">
            Cualquier duda o consulta podes mandarnos un mail o hablarnos por
            nuestras redes sociales!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className="py-5">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-secondary me-md-2"
                type="button"
              >
                Enviar
              </button>
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
