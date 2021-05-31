import React, { Fragment } from "react";
import BackNav from "./components/back-nav";
import { Container, Row, Col } from "react-bootstrap";
import Text from "./components/text";

export default function Wholesalers() {
  return (
    <Fragment>
      <BackNav />
      <Container>
        <Row>
          <Col lg={12} sm={12} className="pt-5 mt-5 mx-auto text-center">
            <h1 className="display-3 mb-5">Compra Mayorista</h1>
          </Col>
        </Row>
        <Text
          title="Primera Descripcion"
          secondaryText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur at. Adipisci omnis odio sed aspernatur. Debitis possimus minima qui, mollitia commodi itaque aliquam temporibus voluptate eum labore eius quo?"
        />
      </Container>
    </Fragment>
  );
}
