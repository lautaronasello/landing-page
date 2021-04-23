import { Fragment, React } from "react";
import Navigate from "./components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./homepage.css";
import Pagination from "./components/carousel";
export default function HomePage() {
  return (
    <Fragment>
      <Navigate />
      <div className="splash">
        <Container>
          <Row className="justify-content-center ">
            <Col xs lg="2"></Col>
            <Col md="auto" className="text-center m-5 p-5">
              <h1>MenosCAoSxFAVOR</h1>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
        <Pagination />
      </div>
      <br />
      <Container>
        <Row>
          <Col md={12} style={{ backgroundColor: "#FBE9E7" }}>
            <h3>Quienes somos?</h3>
            <p class="lead">
              ¡Hola! Bienvenido/a al mundo de MENOS CAOS 🪐🤸🏻‍♀. Primero lo
              primero, nos presentamos. Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas
              de la desorganizaciòn y emprendedoras de nacimiento; juntas
              formamos el #dreamteam de @menoscaosporfavor. Menos Caos nació
              frente a la necesidad de compartir nuestro amor por la
              #organización, la #productividad y la #planificación 🤓. Nuestra
              misión es ayudarte a ordenar el caos de la vida cotidiana, y
              especialmente, acompañarte en esos momentos de desorden y
              desorganización total (fechas especiales, nuevos comienzos, etc.)
              🤩. Si sos del team de los organizados y productivos, -caosxfavor
              viene a traerte los productos de tus sueños. Todas esas cosas
              super ñoñas que siempre quisiste y que te van a volver loco/a.
              Yyyy, si sos del equipo de los desordenados y caóticos, vinimos a
              ayudarte a luchar contra la desorganización 💪🏼👊🏼. Queremos
              compartir con vos productos super copados que, acompañados por un
              servicio de organización integral, te van a facilitar la rutina
              💛.
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
