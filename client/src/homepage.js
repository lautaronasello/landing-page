import { Fragment, React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfoCard from './components/info-card';
import Contact from './components/contact';
import Text from './components/text';
import Img from './components/img';
import Footer from './components/footer';
import cosas1 from './components/products-img/prod-cosas.jpeg';
import cosas2 from './components/products-img/prod-cosas-2.jpeg';
import cosas3 from './components/products-img/prod-cosas-3.jpeg';
import apilado from './components/products-img/prod-apilados.jpeg';
import SectionCombo from './components/SectionCombo';
import axios from 'axios';
import SectionProducts from './components/SectionProducts';
import Navigate from './components/navigate';
import firebase from 'firebase/app';
export default function HomePage() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setPrimerUser(user);
    }
  });

  const [primerUser, setPrimerUser] = useState();

  const style = {
    backgroundColor: '#fff',
    boxShadow: '0rem 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  };
  const [combo, setCombo] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cancel;
    const getCombos = async () => {
      const res = await axios.get(
        'https://menoscaosporfavorstrapi.herokuapp.com/combos/',
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      );
      setCombo(res.data);
    };
    getCombos();
    return () => cancel;
  }, []);

  useEffect(() => {
    let canceled;
    const getProducts = async () => {
      const res = await axios.get(
        'https://menoscaosporfavorstrapi.herokuapp.com/products',
        {
          canceledToken: new axios.CancelToken((c) => (canceled = c)),
        }
      );
      setProducts(res.data);
    };
    getProducts();

    return () => canceled;
  }, []);

  return (
    <Fragment>
      <Navigate primerUser={primerUser} products={products} combo={combo} />
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
        <div className='p-3'>
          <h3>Quienes Somos?</h3>
          <p className='lead' style={{ color: 'black' }}>
            Somos Agus 🦸🏽‍♀ y Mulan 🦹🏻‍♀, enemigas de la desorganización y
            emprendedoras de nacimiento; juntas formamos el equipo que lleva
            adelante el emprendimiento. Menos Caos nació frente a la necesidad
            de compartir nuestro amor por la organización, la productividad y
            planificación 🤓. Nuestra misión es ayudarte a ordenar el caos de la
            vida cotidiana, y especialmente, acompañarte en esos momentos de
            desgano o desorganización total (fechas especiales, nuevos
            comienzos, etc.) 🤩. Si sos del team de los organizados y
            productivos, -Caosxfavor viene a traerte los productos de tus
            sueños. Todas esas cosas super ñoñas que siempre quisiste y que te
            van a volver loco/a. Yyyy, si sos del equipo de los desordenados y
            caóticos, vinimos a ayudarte a luchar contra la desorganización
            💪🏼👊🏼. Queremos compartir con vos los productos que nos ayudan día a
            día a poder hacer más y mejor! Seguinos en nuestras redes sociales,
            compartimos todos los días tips, estrategias y experiencias nuestras
            aprendiendo cada día a optimizarnos!
          </p>
        </div>

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
              style={style}
              subtitle='Tenes distintos combos para aprovechar el orden para ver si lo tenemos en stock! Coordinamos el envío o el retiro de los productos!'
            />
          </Col>
          <SectionCombo combo={combo} />
        </Row>
        <Row>
          <Col md={12} className=' my-5'>
            <hr className='m-auto' style={{ color: '#212121' }} id='who' />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title='Productos'
              style={style}
              subtitle='Productos productos productos productos etc etc etc'
            />
          </Col>
          <SectionProducts products={products} />
        </Row>
        <Row>
          <Col md={12} className='my-5'>
            <hr className='mx-auto' style={{ color: '#212121' }} id='learn' />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCard
              title='Quiero aprender'
              style={style}
              subtitle={[
                'Menoscaos es más que productos para estudiantes, somos una comunidad! Dejanos tu mail para que te mandemos regalitos con información extra, herramientas y estrategias que solemos hacer! No te olvides de seguirnos en ',
                <a
                  key='1'
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
              style={style}
              subtitle='Querés vender Menoscaos en tu negocio? Genial! Dejanos tu mail y nos vamos a contactar mandándote el catálogo con descuentos exclusivos! El mínimo de compra son 20 productos.'
            />
          </Col>
        </Row>
        <Row className='pb-3 mb-3'>
          <Col lg={6} sm={6} className='mt-5 pt-4'>
            <Contact template='template_mayoristas' btnValue='Enviar!' />
          </Col>
          <Col lg={6} sm={6} className='mb-3 mt-4'>
            <Img img={apilado} alt='productos' />
          </Col>
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
