import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "./products";
export default function Store() {
  return (
    <div id="store" className="py-5" style={{ background: "#fbe9e7" }}>
      <Container>
        <Row className=" ">
          <Col md={4}>
            <Products
              img="https://instagram.fcor2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/135717443_3827264750657489_4279301282548829338_n.jpg?tp=1&_nc_ht=instagram.fcor2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=p047falJlb4AX-kpDQi&edm=AP_V10EAAAAA&ccb=7-4&oh=0dbc191cc429a920871c5fec8c0a8e60&oe=60A91EBD&_nc_sid=4f375e"
              title="AGENDAS"
              text="𝔸𝔾𝔼ℕ𝔻𝔸𝕊📒, fueron pensadas sobre 2 principios claves: SUSTENTABILIDAD 🌎 y ORGANIZACIÓN LIBRE 🎨"
              btn="VER!"
            />
          </Col>
          <Col md={4}>
            <Products
              img="https://instagram.fcor2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/109440639_669913536926861_7110360077667678823_n.jpg?tp=1&_nc_ht=instagram.fcor2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OK5iD_S1lpcAX-0ORJq&edm=AP_V10EAAAAA&ccb=7-4&oh=bdc9345b15123dd150e2804d936f4648&oe=60A9B76B&_nc_sid=4f375e"
              title="COMBOS"
              text="ℂ𝕆𝕄𝔹𝕆𝕊📒, tenemos un combo especifico para vos o para que regales a ese amigo/a que lo necesite"
              btn="VER!"
            />
          </Col>
          <Col md={4}>
            <Products
              img="https://instagram.fcor2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/115780447_330580887975250_3533177397756594538_n.jpg?tp=1&_nc_ht=instagram.fcor2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=zERwFIY4RfYAX-CWuF8&edm=AP_V10EAAAAA&ccb=7-4&oh=0ff1de692aad9a0a372d1571c2be182b&oe=60A6CDAB&_nc_sid=4f375e"
              title="PRODUCTOS INDIVIDUALES"
              text="𝕋ℍ𝔼 ℙℝ𝕆𝔻𝕌ℂ𝕋𝕆𝕊 📒, nunca esta de mas sumar algo a tu equipo de MenosCaos para mejorar tu productividad"
              btn="VER!"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
