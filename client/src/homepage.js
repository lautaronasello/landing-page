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
import { ToastContainer } from 'react-toastify';

export default function HomePage() {
  const [primerUser, setPrimerUser] = useState();
  const [loading, setLoading] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setPrimerUser(user);
    }
  });

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
        'https://menoscaosporfavorstrapi.herokuapp.com/combos',
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
  useEffect(() => {
    if (combo && products) setLoading(false);
  }, [combo, products]);

  if (loading) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='spinner-border text-warning' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <Fragment>
        <Navigate primerUser={primerUser} products={products} combo={combo} />
        <Container className='text-center back '>
          <Row>
            <Col>
              <h3 id='inicio' className='my-5'>
                Organizaci??n bajada a tierra
              </h3>
            </Col>
          </Row>
          <Text
            titleText='menos caos por favor'
            secondaryText={
              'Organizaci??n libre para estudiantes. Desde C??rdoba a todo el pa??s'
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
              Somos Agus ?????????????? y Mulan ??????????????, enemigas de la desorganizaci??n y
              emprendedoras de nacimiento; juntas formamos el equipo que lleva
              adelante el emprendimiento. Menos Caos naci?? frente a la necesidad
              de compartir nuestro amor por la organizaci??n, la productividad y
              planificaci??n ????. Nuestra misi??n es ayudarte a ordenar el caos de
              la vida cotidiana, y especialmente, acompa??arte en esos momentos
              de desgano o desorganizaci??n total (fechas especiales, nuevos
              comienzos, etc.) ????. Si sos del team de los organizados y
              productivos, -Caosxfavor viene a traerte los productos de tus
              sue??os. Todas esas cosas super ??o??as que siempre quisiste y que te
              van a volver loco/a. Yyyy, si sos del equipo de los desordenados y
              ca??ticos, vinimos a ayudarte a luchar contra la desorganizaci??n
              ????????????????. Queremos compartir con vos los productos que nos ayudan d??a
              a d??a a poder hacer m??s y mejor! Seguinos en nuestras redes
              sociales, compartimos todos los d??as tips, estrategias y
              experiencias nuestras aprendiendo cada d??a a optimizarnos!
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
                title='Productos'
                style={style}
                subtitle='Productos productos productos productos etc etc etc'
              />
            </Col>
          </Row>
          <SectionProducts products={products} />
          <Row>
            <Col md={12} className=' my-5'>
              <hr className='m-auto' style={{ color: '#212121' }} id='who' />
            </Col>
          </Row>
          <Row>
            <Col>
              <InfoCard
                title='Combos!'
                style={style}
                subtitle='Tenes distintos combos para aprovechar el orden para ver si lo tenemos en stock! Coordinamos el env??o o el retiro de los productos!'
              />
            </Col>
          </Row>

          <SectionCombo combo={combo} />
        </Container>
        <Container className='justify-content-center aling-items-center'>
          <Row>
            <Col md={12} className='mb-5'>
              <hr className='mx-auto' style={{ color: '#212121' }} id='learn' />
            </Col>
          </Row>
          <Row>
            <Col>
              <InfoCard
                title='Quiero aprender'
                style={style}
                subtitle={[
                  'Menoscaos es m??s que productos para estudiantes, somos una comunidad! Dejanos tu mail para que te mandemos regalitos con informaci??n extra, herramientas y estrategias que solemos hacer! No te olvides de seguirnos en ',
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
                subtitle='Quer??s vender Menoscaos en tu negocio? Genial! Dejanos tu mail y nos vamos a contactar mand??ndote el cat??logo con descuentos exclusivos! El m??nimo de compra son 20 productos.'
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
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Fragment>
    );
  }
}
