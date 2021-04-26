import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail",
        "template_menoscaos",
        e.target,
        "user_AWfTGKV1KutMrQp821o8P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container id="contact">
      <Row>
        <Col className="text-center mt-5">
          <h1 className="display-4">Contacto</h1>
          <p className="lead">
            Cualquier duda o consulta podes mandarnos un mail o hablarnos por
            nuestras redes sociales!
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={sendEmail} className="py-5">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Tu Nombre :)"
                className="mb-2"
              />
              <Form.Label>Email </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                className="mb-2"
              />
              <Form.Label>Asunto </Form.Label>
              <Form.Control
                name="asunto"
                type="text"
                placeholder="Promos de esta semana"
                className="mb-2"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <input
                className="btn btn-outline-secondary me-md-2"
                type="submit"
                value="Enviar!"
              />
            </div>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
