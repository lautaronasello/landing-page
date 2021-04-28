import { Fragment, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./homepage.css";
import Pagination from "./components/carousel";
import InfoCard from "./components/info-card";
import Contact from "./components/contact";
import Navigate from "./components/navigate";
import Text from "./components/text";
import Img from "./components/img";
import product1 from "./components/products-img/productos-1.jpeg";
export default function HomePage() {
  return (
    <Fragment>
      <Navigate />
      <Container className="text-center mt-3 pt-4 back ">
        <Row>
          <Col>
            <h1 id="inicio" className="display-4 mt-4 mb-3">
              Organizacion bajada a tierra
            </h1>
          </Col>
        </Row>
        <Text
          title="Menos Caos por favor"
          secondaryText={
            "Organización libre para estudiantes. Desde Córdoba a todo el país"
          }
        />
        <Row className="text-center justify-content-center ">
          <Col md={8}>
            <Pagination />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="my-5">
            <hr className="m-auto" style={{ color: "#212121" }} id="who" />
          </Col>
        </Row>
      </Container>
      <Container className="justify-content-center">
        <InfoCard
          title="Quienes Somos?"
          description="Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas de la desorganización y emprendedoras de nacimiento; juntas formamos el equipo que lleva adelante el emprendimiento. 
          Menos Caos nació frente a la necesidad de compartir nuestro amor por la organización, la productividad y planificación 🤓. Nuestra misión es ayudarte a ordenar el caos de la vida cotidiana, y especialmente, acompañarte en esos momentos de desgano o desorganización total (fechas especiales, nuevos comienzos, etc.) 🤩. Si sos del team de los organizados y productivos, -Caosxfavor viene a traerte los productos de tus sueños. Todas esas cosas super ñoñas que siempre quisiste y que te van a volver loco/a. Yyyy, si sos del equipo de los desordenados y caóticos, vinimos a ayudarte a luchar contra la desorganización 💪🏼👊🏼.
          Queremos compartir con vos los productos que nos ayudan día a día a poder hacer más y mejor! Seguinos en nuestras redes sociales, compartimos todos los días tips, estrategias y experiencias nuestras aprendiendo cada día a optimizarnos! "
        />
      </Container>
      <Container className="justify-content-center my-5 aling-items-center">
        <InfoCard
          title="Quiero Comprar"
          description={[
            "Ya viste que producto querés comprar? Hablanos por MD a ",
            <a
              href="https://www.instagram.com/menoscaosporfavor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @menoscaosporfavor
            </a>,
            " para ver si lo tenemos en stock! Coordinamos el envío o el retiro de los productos!",
          ]}
        />
        <div className="text-center">
          <Img img={product1} alt="productos" text="producto x en uso" />
        </div>
      </Container>
      <Container className="justify-content-center my-5 aling-items-center">
        <InfoCard
          title="Quiero aprender"
          description="Menoscaos es más que productos para estudiantes, somos una comunidad! Dejanos tu mail para que te mandemos regalitos con información extra, herramientas y estrategias que solemos hacer! No te olvides de seguirnos en Instagram para interactuar y aprender con los tips diarios!"
        />
        <div className="text-center">
          <Img img={product1} alt="productos" text="producto x en uso" />
        </div>
      </Container>
      <Container className="justify-content-center my-5 aling-items-center">
        <InfoCard
          title="Mayoristas"
          description="Querés vender Menoscaos en tu negocio? Genial! Dejanos tu mail y nos vamos a contactar mandándote el catálogo con descuentos exclusivos! El mínimo de compra son 20 productos."
        />
        <div className="text-center">
          <Img img={product1} alt="productos" text="producto x en uso" />
        </div>
      </Container>
      <Contact />
    </Fragment>
  );
}
