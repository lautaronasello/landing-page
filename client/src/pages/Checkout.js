import React, { useState, useEffect } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { db } from '../index';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SectionProducts from '../components/SectionProducts';
import { ToastContainer } from 'react-toastify';
import BackNav from '../components/back-nav';

export default function Checkout() {
  const [database, setDatabase] = useState('data');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let canceled;
    const getProducts = async () => {
      const res = await axios.get('http://localhost:1337/products', {
        canceledToken: new axios.CancelToken((c) => (canceled = c)),
      });
      setProducts(res.data);
    };
    getProducts();

    return () => canceled;
  }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setDatabase(user.email);
    }
  });

  useEffect(() => {
    db.collection(database).onSnapshot((querySnapshot) => {
      var p = [];
      querySnapshot.forEach((doc) => {
        p.push(doc.data());
      });

      setCart(p);
    });
  }, [database]);

  const [cart, setCart] = useState([]);

  function handleNameChange(e) {
    let value = e.target.value;
    setName(value);
  }

  function handleEmailChange(e) {
    let value = e.target.value;
    setEmail(value);
  }

  function handleInstagramChange(e) {
    let value = e.target.value;
    setInstagram(value);
  }

  function handlePhoneChange(e) {
    let value = e.target.value;
    setPhone(value);
  }

  const [subTotal, setSubTotal] = useState();
  const [nameBuyProds, setNameBuyProds] = useState('');

  useEffect(() => {
    var xname = '';
    var x = 0;
    for (let i = 0; i < cart.length; i++) {
      x += cart[i].price * cart[i].qty;
      xname += cart[i].qty + ' ' + cart[i].name + '; ';
    }
    setNameBuyProds(xname);
    setSubTotal(x.toString());
  }, [cart]);

  function handleShipping(e) {
    setShipping(e.target.value);
  }
  function handlePayment(e) {
    setPayment(e.target.value);
  }
  const [payment, setPayment] = useState('nada');
  const [shipping, setShipping] = useState('nada');
  const [primerPrecio, setPrimerPrecio] = useState();
  useEffect(() => {
    var x = parseInt(subTotal);
    if (shipping === 'dentro de circunvalacion') {
      x += 300;
    } else if (shipping === 'fuera de circunvalacion') {
      x += 400;
    }
    setPrimerPrecio(x);
  }, [shipping, subTotal]);

  useEffect(() => {
    var paymentMP = Math.floor(parseInt(primerPrecio) * 10) / 100;
    var x = primerPrecio;
    if (payment === 'mercado pago') {
      x += paymentMP;
      setTotal(x);
    }
    setTotal(x);
  }, [payment, primerPrecio]);
  const [total, setTotal] = useState();

  return (
    <>
      <BackNav />
      <div
        className='justify-content-center align-items-center d-flex mt-5'
        style={{ minHeight: '80vh' }}
      >
        <div className='container text-center'>
          <h1>Ultimos Pasos!</h1>
          <form
            action='http://menoscaosporfavorbackend.herokuapp.com/checkout'
            method='POST'
          >
            <div className='row text-left'>
              <div className='col-md-4 col-sm-12 my-3'>
                <div className='card p-3'>
                  <label className='form-label my-2'>
                    Opciones de Entrega
                    <select
                      defaultValue='nada'
                      value={shipping}
                      onChange={handleShipping}
                      className='form-select'
                      aria-label='Default select example'
                      id='shipping'
                      name='shipping'
                      required
                    >
                      <option disabled value='nada'>
                        Elegir forma de entrega/retiro
                      </option>
                      <option value='nueva cordoba'>
                        Nueva Córdoba (SIN COSTO)
                      </option>
                      <option value='barrio maipu'>
                        Barrio Maipú (SIN COSTO){' '}
                      </option>
                      <option value='nuevocentro'>
                        Nuevocentro Shopping (SIN COSTO){' '}
                      </option>
                      <option value='dentro de circunvalacion'>
                        Cordoba capital dentro de circunvalacion
                      </option>
                      <option value='fuera de circunvalacion'>
                        Cordoba capital fuera de circunvalacion
                      </option>
                      <option value='andreani o Epick'>
                        Entregas en todo el pais por Andreani o Epick
                      </option>
                    </select>{' '}
                  </label>
                  <label htmlFor='name' className='form-label my-2'>
                    Nombre y Apellido *
                  </label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Nombre y Apellido'
                    required
                    id='name'
                    className='form-control'
                    onChange={handleNameChange}
                    value={name}
                  />
                  <label htmlFor='email' className='form-label my-2'>
                    Email para enviarte la informacion de Compra, entrega y
                    retiro *
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='example@mail.com'
                    required
                    id='email'
                    className='form-control'
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <label htmlFor='instagram' className='form-label my-2'>
                    Dejanos tu instagram!
                  </label>
                  <input
                    type='text'
                    name='instagram'
                    placeholder='@tuinstagram'
                    id='instagram'
                    className='form-control'
                    onChange={handleInstagramChange}
                    value={instagram}
                  />
                  <label htmlFor='phone' className='form-label my-2'>
                    Tel./Whatsapp *
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='(Codigo de área) Número de teléfono'
                    id='phone'
                    className='form-control'
                    required
                    onChange={handlePhoneChange}
                    value={phone}
                  />{' '}
                  <label className='form-label my-2'>
                    Opciones de Pago{' '}
                    <select
                      defaultValue='nada'
                      onChange={handlePayment}
                      className='form-select'
                      aria-label='Default select example'
                      id='payment'
                      name='payment'
                      required
                      value={payment}
                    >
                      <option disabled value='nada'>
                        Elegir forma de pago
                      </option>
                      <option value='efectivo entrega'>
                        Efectivo en la entrega (Solo Cba. Capital)
                      </option>
                      <option value='transferencia bancaria'>
                        Transferencia Bancaria
                      </option>
                      <option value='mercado pago'>
                        Mercado Pago (10% Recargo)
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              <div className='col-md-8 col-sm-12 my-3'>
                <div className='p-3 my-2'>
                  En el momento que realices la compra te llegará un mail con la
                  confirmacion de tu compra. Además nosotras nos vamos a
                  comunicar con vos por tu instagram o whatsapp (?) para
                  organizar la entrega!
                </div>
                <div className='bg-white text-center'>
                  <ShoppingCart payment={payment} subTotal={subTotal} />
                  <h4 className='py-3'>TOTAL: AR${total}</h4>
                </div>
                {payment === 'transferencia bancaria' && (
                  <div className='border border-dark p-3 mt-4'>
                    Nuestro CVU es:{' '}
                    <div className='text-light bg-dark d-inline'>
                      0000007900274075075470
                    </div>{' '}
                    y nuestro Alias:{' '}
                    <div className='text-light bg-dark d-inline'>
                      MENOSCAOSPORFAV.UALA
                    </div>{' '}
                    CUIL: 27407507547 . Cuando hagas la transferencia pasanos el
                    comprobante por mensaje privado de Instagram en{' '}
                    <a
                      href='https://www.instagram.com/menoscaosporfavor/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      @menoscaosporfavor
                    </a>{' '}
                  </div>
                )}
              </div>
            </div>

            {nameBuyProds && (
              <>
                <input type='hidden' name='title' value={nameBuyProds} />{' '}
                <input type='hidden' name='prods' value={nameBuyProds} />
              </>
            )}
            {total !== 0 && <input type='hidden' name='price' value={total} />}
            <input type='hidden' name='prods' value={nameBuyProds} />
          </form>
          <Link to='/homepage'>
            <p className='text-decoration-underline'> Volver al inicio</p>
          </Link>
        </div>
      </div>
      <div className='container text-center' style={{ marginTop: '' }}>
        <h3>Suma mas productos a tu carrito!</h3>
        <SectionProducts products={products} />
      </div>
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
    </>
  );
}
