import React, { useState, useEffect } from 'react';
import BackNav from '../components/back-nav';
import ShoppingCart from '../components/ShoppingCart';
import { db } from '../index';
import firebase from 'firebase/app';

export default function Checkout() {
  const [database, setDatabase] = useState('data');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');

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
  const [nameBuyProds, setNameBuyProds] = useState([]);
  useEffect(() => {
    var x = 0;
    var xname = '';
    cart.map((i) => {
      x += i.price * i.qty;
      xname += i.qty + ' ' + i.name + '; ';
    });
    setNameBuyProds(xname);
    setSubTotal(x.toString());
  }, [cart]);

  function handleShipping(e) {
    setShipping(e.target.value);
  }
  function handlePayment(e) {
    setPayment(e.target.value);
  }
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('');
  const [total, setTotal] = useState();
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
  return (
    <>
      <BackNav />
      <div
        className='justify-content-center align-items-center d-flex mt-5'
        style={{ minHeight: '80vh' }}
      >
        <div className='container'>
          <form
            action='http://menoscaosporfavorbackend.herokuapp.com/checkout'
            method='POST'
          >
            <div className='row'>
              <div className='col-md-4 col-sm-12 my-3'>
                <div className='card p-3'>
                  <label className='form-label my-2'>
                    Opciones de Entrega
                    <select
                      value={shipping}
                      onChange={handleShipping}
                      className='form-select'
                      aria-label='Default select example'
                      id='shipping'
                      name='shipping'
                      required
                    >
                      <option defaultValue disabled value='nada'>
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
                      onChange={handlePayment}
                      className='form-select'
                      aria-label='Default select example'
                      id='payment'
                      name='payment'
                      required
                      defaultValue='nada'
                      value={payment}
                    >
                      <option disabled value='nada'>
                        Elegir forma de pago
                      </option>
                      <option value='efectivo entrega'>
                        Efectivo en la entrega (Solo Cba. Capital)
                      </option>
                      <option value='transferencia Bancaria'>
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
                <div className='bg-white text-center'>
                  <ShoppingCart subTotal={subTotal} />
                  <h4 className='pb-3'>TOTAL: AR${total}</h4>
                </div>
              </div>
            </div>{' '}
            <input type='hidden' name='title' value={nameBuyProds} />
            <input type='hidden' name='price' value={total} />
            <input type='hidden' name='prods' value={nameBuyProds} />
          </form>
        </div>
      </div>
    </>
  );
}
