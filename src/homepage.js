import { Fragment, React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from './components/info-card';
import Contact from './components/contact';
import Navigate from './components/navigate';
import Text from './components/text';
import Img from './components/img';
import Footer from './components/footer';

import cosas1 from './components/products-img/prod-cosas.jpeg';

import cosas2 from './components/products-img/prod-cosas-2.jpeg';
import cosas3 from './components/products-img/prod-cosas-3.jpeg';
import apilado from './components/products-img/prod-apilados.jpeg';
import CardSell from './components/CardSell';
import axios from 'axios';

export default function HomePage() {
  const [combo, setCombo] = useState([]);
  useEffect(() => {
    let cancel;
    const toArray = [];
    axios
      .get('http://localhost:1337/combos', {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        toArray.push(res.data);
        setCombo(toArray);
      });
    return () => cancel;
  });

  return (
    <Fragment>
      <Navigate />
      <Container className='text-center mt-5 pt-4 back '>
        <Row>
          <Col>
            <h3 id='inicio' className='my-5'>
              Organización bajada a tierra
            </h3>
          </Col>
        </Row>
        <Text
          titleText='menos caos por favor'
          secondaryText={
            'Organización libre para estudiantes. Desde Córdoba a todo el país'
          }
        />

        <Row>
          <Col md={12} className='mt-5 mb-2'>
            <hr className='m-auto' style={{ color: '#212121' }} id='who' />
          </Col>
        </Row>
      </Container>
      <Container className='text-center justify-content-center'>
        <InfoCard
          color='black'
          title='Quienes Somos?'
          subtitle='Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas de la desorganización y emprendedoras de nacimiento; juntas formamos el equipo que lleva adelante el emprendimiento. 
          Menos Caos nació frente a la necesidad de compartir nuestro amor por la organización, la productividad y planificación 🤓. Nuestra misión es ayudarte a ordenar el caos de la vida cotidiana, y especialmente, acompañarte en esos momentos de desgano o desorganización total (fechas especiales, nuevos comienzos, etc.) 🤩. Si sos del team de los organizados y productivos, -Caosxfavor viene a traerte los productos de tus sueños. Todas esas cosas super ñoñas que siempre quisiste y que te van a volver loco/a. Yyyy, si sos del equipo de los desordenados y caóticos, vinimos a ayudarte a luchar contra la desorganización 💪🏼👊🏼.
          Queremos compartir con vos los productos que nos ayudan día a día a poder hacer más y mejor! Seguinos en nuestras redes sociales, compartimos todos los días tips, estrategias y experiencias nuestras aprendiendo cada día a optimizarnos! '
        />
        <Row>
          <Col md={12} className='mb-5'>
            <hr className='mx-auto' style={{ color: '#212121' }} id='buy' />
          </Col>
        </Row>
      </Container>
      <Container className='justify-content-center aling-items-center'>
        <Row>
          <Col>
            <InfoCard
              title='Combos!'
              backgroundColor={'#fff'}
              boxShadow={'0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
              subtitle='Tenes distintos combos para aprovechar el orden para ver si lo tenemos en stock! Coordinamos el envío o el retiro de los productos!'
            />
          </Col>
        </Row>
        <section className='carousel'>
          <div className='carousel__container'>
            <Row className='mt-5'>
              {combo.map((data) => {
                return (
                  <>
                    <Col lg={3} sm={3}>
                      <CardSell
                        key1={data[0].id}
                        nameCombo={data[0].name}
                        key2={data[0].products[0].published_at}
                        prods={[
                          <li key={data[0].products[0].name}>
                            {data[0].products[0].name}{' '}
                          </li>,
                          <li key={data[0].products[1].name}>
                            {data[0].products[1].name}{' '}
                          </li>,
                        ]}
                        key4={data[0].created_at}
                        price={data[0].price}
                      />
                    </Col>
                    <Col lg={3} sm={3}>
                      <CardSell
                        key1={data[1].id}
                        nameCombo={data[1].name}
                        key2={data[1].products[0].published_at}
                        prods={[
                          <li key={data[1].products[0].name}>
                            {data[1].products[0].name}{' '}
                          </li>,
                          <li key={data[1].products[1].name}>
                            {data[1].products[1].name}{' '}
                          </li>,
                          <li key={data[1].products[2].name}>
                            {data[1].products[2].name}{' '}
                          </li>,
                        ]}
                        key4={data[1].created_at}
                        price={data[1].price}
                      />
                    </Col>{' '}
                    <Col lg={3} sm={3}>
                      <CardSell
                        key1={data[2].id}
                        nameCombo={data[2].name}
                        key2={data[2].products[0].published_at}
                        prods={[
                          <li key={data[2].products[0].name}>
                            {data[2].products[0].name}{' '}
                          </li>,
                          <li key={data[2].products[1].name}>
                            {data[2].products[1].name}{' '}
                          </li>,
                          <li key={data[2].products[2].name}>
                            {data[2].products[2].name}{' '}
                          </li>,
                        ]}
                        key4={data[2].created_at}
                        price={data[2].price}
                      />
                    </Col>{' '}
                    <Col lg={3} sm={3}>
                      <CardSell
                        key1={data[3].id}
                        nameCombo={data[3].name}
                        key2={data[3].products[0].published_at}
                        prods={[
                          <li key={data[3].products[0].name}>
                            {data[3].products[0].name}{' '}
                          </li>,
                          <li key={data[3].products[1].name}>
                            {data[3].products[1].name}{' '}
                          </li>,
                        ]}
                        key4={data[3].created_at}
                        price={data[3].price}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </div>
        </section>

        <Row>
          <Col md={12} className='my-5'>
            <hr className='mx-auto' style={{ color: '#212121' }} id='learn' />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title='Quiero aprender'
              backgroundColor={'#fff '}
              boxShadow={'0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
              subtitle={[
                'Menoscaos es más que productos para estudiantes, somos una comunidad! Dejanos tu mail para que te mandemos regalitos con información extra, herramientas y estrategias que solemos hacer! No te olvides de seguirnos en ',
                <a
                  href='https://www.instagram.com/menoscaosporfavor/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='insta-link'
                >
                  Instagram
                </a>,
                ' para interactuar y aprender con los tips diarios!',
              ]}
            />
          </Col>
        </Row>
        <div className='mt-3'>
          <Contact
            template='template_learn'
            btnValue='Quiero enterarme!'
            classHidden='visually-hidden'
          />
        </div>

        <Row>
          <Col lg={4} sm={4}>
            <Img img={cosas1} alt='productos' />{' '}
          </Col>
          <Col lg={4} sm={4}>
            <Img img={cosas2} alt='productos' />
          </Col>
          <Col lg={4} sm={4}>
            <Img img={cosas3} alt='productos' />
          </Col>
        </Row>
        <Row>
          <Col md={12} className='my-5'>
            <hr
              className='mx-auto'
              style={{ color: '#212121' }}
              id='wholesalers'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title='Mayoristas'
              backgroundColor={'#fff '}
              boxShadow={'0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)'}
              subtitle='Querés vender Menoscaos en tu negocio? Genial! Dejanos tu mail y nos vamos a contactar mandándote el catálogo con descuentos exclusivos! El mínimo de compra son 20 productos.'
            />
          </Col>
        </Row>
        <Row className='pb-3 mb-3'>
          <Col lg={6} sm={6} className='mt-5 pt-4'>
            <Contact template='template_mayoristas' btnValue='Enviar!' />
          </Col>
          <Col lg={6} sm={6} className='mb-3'>
            <Img img={apilado} alt='productos' />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
