import { Fragment, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./homepage.css";
import InfoCard from "./components/info-card";
import Contact from "./components/contact";
import Navigate from "./components/navigate";
import Text from "./components/text";
import Img from "./components/img";
import Footer from "./components/footer";

import product from "./components/products-img/productos.jpeg";
import product1 from "./components/products-img/productos-1.jpeg";
import product2 from "./components/products-img/productos-2.jpeg";
import product3 from "./components/products-img/productos-3.jpeg";
import cosas1 from "./components/products-img/prod-cosas.jpeg";

import cosas2 from "./components/products-img/prod-cosas-2.jpeg";
import cosas3 from "./components/products-img/prod-cosas-3.jpeg";
import apilado from "./components/products-img/prod-apilados.jpeg";

export default function HomePage() {
  return (
    <Fragment>
      <Navigate />
      <Container className="text-center mt-3 pt-4 back ">
        <Row>
          <Col>
            <h3 id="inicio" className="my-5">
              Organización bajada a tierra
            </h3>
          </Col>
        </Row>
        <Text
          titleText="menos caos por favor"
          secondaryText={
            "Organización libre para estudiantes. Desde Córdoba a todo el país"
          }
        />

        <Row>
          <Col md={12} className="mt-5 mb-2">
            <hr className="m-auto" style={{ color: "#212121" }} id="who" />
          </Col>
        </Row>
      </Container>
      <Container className="text-center justify-content-center">
        <InfoCard
          color="black"
          title="Quienes Somos?"
          subtitle="Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas de la desorganización y emprendedoras de nacimiento; juntas formamos el equipo que lleva adelante el emprendimiento. 
          Menos Caos nació frente a la necesidad de compartir nuestro amor por la organización, la productividad y planificación 🤓. Nuestra misión es ayudarte a ordenar el caos de la vida cotidiana, y especialmente, acompañarte en esos momentos de desgano o desorganización total (fechas especiales, nuevos comienzos, etc.) 🤩. Si sos del team de los organizados y productivos, -Caosxfavor viene a traerte los productos de tus sueños. Todas esas cosas super ñoñas que siempre quisiste y que te van a volver loco/a. Yyyy, si sos del equipo de los desordenados y caóticos, vinimos a ayudarte a luchar contra la desorganización 💪🏼👊🏼.
          Queremos compartir con vos los productos que nos ayudan día a día a poder hacer más y mejor! Seguinos en nuestras redes sociales, compartimos todos los días tips, estrategias y experiencias nuestras aprendiendo cada día a optimizarnos! "
        />
        <Row>
          <Col md={12} className="mb-5">
            <hr className="mx-auto" style={{ color: "#212121" }} id="buy" />
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center aling-items-center">
        <Row>
          <Col>
            <InfoCard
              title="Quiero Comprar"
              backgroundColor={"#fff"}
              boxShadow={"0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)"}
              subtitle={[
                "Ya viste que producto querés comprar? Hablanos por MD a ",
                <a
                  href="https://www.instagram.com/menoscaosporfavor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-link"
                >
                  @menoscaosporfavor
                </a>,
                " para ver si lo tenemos en stock! Coordinamos el envío o el retiro de los productos!",
              ]}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={3} sm={3}>
            <Img
              img={product}
              alt="productos"
              height={"15rem"}
              width={"100%"}
            />{" "}
          </Col>
          <Col lg={3} sm={3}>
            <Img
              img={product1}
              alt="productos"
              height={"15rem"}
              width={"100%"}
            />
          </Col>
          <Col lg={3} sm={3}>
            <Img
              img={product2}
              alt="productos"
              height={"15rem"}
              width={"100%"}
            />
          </Col>
          <Col lg={3} sm={3}>
            <Img
              img={product3}
              alt="productos"
              height={"15rem"}
              width={"100%"}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="my-5">
            <hr className="mx-auto" style={{ color: "#212121" }} id="learn" />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title="Quiero aprender"
              backgroundColor={"#fff "}
              boxShadow={"0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)"}
              subtitle={[
                "Menoscaos es más que productos para estudiantes, somos una comunidad! Dejanos tu mail para que te mandemos regalitos con información extra, herramientas y estrategias que solemos hacer! No te olvides de seguirnos en ",
                <a
                  href="https://www.instagram.com/menoscaosporfavor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-link"
                >
                  Instagram
                </a>,
                " para interactuar y aprender con los tips diarios!",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Contact
            template="template_learn"
            asunto="Quiero Aprender"
            btnValue="Quiero enterarme!"
            classHidden="visually-hidden"
          />
        </Row>
        <Row>
          <Col lg={4} sm={4}>
            <Img img={cosas1} alt="productos" height={"15rem"} width={"100%"} />{" "}
          </Col>
          <Col lg={4} sm={4}>
            <Img img={cosas2} alt="productos" height={"15rem"} width={"100%"} />
          </Col>
          <Col lg={4} sm={4}>
            <Img img={cosas3} alt="productos" height={"15rem"} width={"100%"} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="my-5">
            <hr
              className="mx-auto"
              style={{ color: "#212121" }}
              id="wholesalers"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title="Mayoristas"
              backgroundColor={"#fff "}
              boxShadow={"0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)"}
              subtitle="Querés vender Menoscaos en tu negocio? Genial! Dejanos tu mail y nos vamos a contactar mandándote el catálogo con descuentos exclusivos! El mínimo de compra son 20 productos."
            />
          </Col>
        </Row>
        <Row className="pb-5 mb-5">
          <Col lg={6} sm={6} className="mb-3">
            <Contact
              template="template_mayoristas"
              asunto="COMPRA MAYORISTA"
              btnValue="Enviar!"
            />
          </Col>
          <Col lg={6} sm={6} className="mb-3">
            <Img
              img={apilado}
              alt="productos"
              height={"24rem"}
              width={"100%"}
            />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
