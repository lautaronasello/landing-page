import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact(props) {
  const { template, btnValue, classHidden } = props;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail",
        template,
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
    <Row>
      <Col>
        <Form onSubmit={sendEmail} className="pb-3 ">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Tu Nombre :)"
              className="mb-2"
              required
            />
            <Form.Label>Email*</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              className="mb-2"
              required
            />
            <div className={classHidden}>
              <Form.Label>Teléfono </Form.Label>
              <Form.Control
                name="phone"
                type="tel"
                placeholder="(Código de área) Número"
                className="mb-2"
              />
            </div>
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className={classHidden}
          >
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} />
          </Form.Group>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              className="btn btn-outline-secondary me-md-2"
              type="submit"
              value={btnValue}
            />
          </div>
        </Form>
      </Col>
    </Row>
  );
}
