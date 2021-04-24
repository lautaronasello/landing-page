import { Fragment, React } from "react";
import Navigate from "./components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./homepage.css";
import Pagination from "./components/carousel";
import Who from "./components/who";
import Store from "./components/store";
import Contact from "./components/contact";

export default function HomePage() {
  return (
    <Fragment>
      <Navigate />
      <div style={{ minHeight: "100vh", backgroundColor: "#fff8e1" }}>
        <Container className="text-center mt-5 p-5" id="inicio">
          <Row>
            <Col md={12}>
              <h1 className="display-1 p-3">Bienvenido!</h1>
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center align-items-center splash back ">
          <Container>
            <Row className="justify-content-center ">
              <Col
                md={8}
                className="text-center  p-5 mb-4 shadow"
                style={{ background: "#ecd3c0" }}
              >
                <h1>MenosCAoSxFAVOR</h1>
                <p className="label">
                  Enemigas de la procastinacion y del descontrol nos encontramos
                  en Cordoba pero{" "}
                  <strong>
                    hacemos envios a <mark>TODO EL PAIS</mark>
                  </strong>
                </p>
              </Col>
            </Row>
          </Container>
          <Pagination />
        </div>
      </div>
      <br />
      <hr className="m-auto" style={{ color: "#212121", width: "85%" }} />

      <Who
        title="Quienes Somos?"
        description="¡Hola! Bienvenido/a al mundo de MENOS CAOS 🪐🤸🏻‍♀. Primero lo
            primero, nos presentamos. Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas de
            la desorganizaciòn y emprendedoras de nacimiento; juntas formamos el
            #dreamteam de @menoscaosporfavor. Menos Caos nació frente a la
            necesidad de compartir nuestro amor por la #organización, la
            #productividad y la #planificación 🤓. Nuestra misión es ayudarte a
            ordenar el caos de la vida cotidiana, y especialmente, acompañarte
            en esos momentos de desorden y desorganización total (fechas
            especiales, nuevos comienzos, etc.) 🤩. Si sos del team de los
            organizados y productivos, -caosxfavor viene a traerte los productos
            de tus sueños. Todas esas cosas super ñoñas que siempre quisiste y
            que te van a volver loco/a. Yyyy, si sos del equipo de los
            desordenados y caóticos, vinimos a ayudarte a luchar contra la
            desorganización 💪🏼👊🏼. Queremos compartir con vos productos super
            copados que, acompañados por un servicio de organización integral,
            te van a facilitar la rutina 💛."
      />
      <Store />
      <Contact />
    </Fragment>
  );
}
