import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BackNav from '../components/back-nav';
import ShoppingCart from '../components/ShoppingCart';

export default function Checkout() {
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();
  const [datos, setDatos] = useState([
    {
      name: 'Nombre y Apellido',
      email: 'example@mail.com',
      instagram: '@tuinstagram',
      phone: '(Codigo de área)Número de teléfono',
    },
  ]);

  function handlePayment(e) {
    setPayment(e.target.value);
  }

  function handleShipping(e) {
    setShipping(e.target.value);
  }

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setDatos({
      [name]: value,
    });
  }
  useEffect(() => {
    console.log(payment, datos.name);
  }, [payment, datos]);

  return (
    <>
      <BackNav />
      <div
        className='justify-content-center align-items-center d-flex mt-5'
        style={{ minHeight: '90vh' }}
      >
        <div className='container'>
          <form action='http://localhost:3001/checkout' method='POST'>
            <div className='row'>
              <div className='col-md-4 col-sm-12 my-3'>
                <div className='card p-3'>
                  <label className='form-label my-2'>
                    Opciones de Entrega
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      id='shipping'
                      name='shipping'
                      value={shipping}
                      required
                      onChange={handleShipping}
                    >
                      <option disabled value='shipping default'>
                        Elegir forma de entrega/retiro
                      </option>
                      <option value='Nueva Cordoba'>
                        Nueva Córdoba (SIN COSTO)
                      </option>
                      <option value='Barrio Maipú'>
                        Barrio Maipú (SIN COSTO){' '}
                      </option>
                      <option value='Nuevocentro'>
                        Nuevocentro Shopping (SIN COSTO){' '}
                      </option>
                      <option value='Dentro de circunvalacion'>
                        Cordoba capital dentro de circunvalacion
                      </option>
                      <option value='Fuera de circunvalacion'>
                        Cordoba capital fuera de circunvalacion
                      </option>
                      <option value='Andreani o Epick'>
                        Entregas en todo el pais por Andreani o Epick
                      </option>
                    </select>{' '}
                  </label>
                  <label className='form-label my-2'>
                    Opciones de Pago{' '}
                    <select
                      value={payment}
                      onChange={handlePayment}
                      className='form-select'
                      aria-label='Default select example'
                      id='payment'
                      name='payment'
                      required
                    >
                      <option disabled value='payment default'>
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
                  <label htmlFor='name' className='form-label my-2'>
                    Nombre y Apellido *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={datos.name}
                    placeholder='Nombre y Apellido'
                    required
                    id='name'
                    className='form-control'
                    onChange={handleInputChange}
                  />
                  <label htmlFor='email' className='form-label my-2'>
                    Email para enviarte la informacion de Compra, entrega y
                    retiro *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={datos.email}
                    placeholder='example@mail.com'
                    required
                    id='email'
                    className='form-control'
                    onChange={handleInputChange}
                  />
                  <label htmlFor='instagram' className='form-label my-2'>
                    Dejanos tu instagram!
                  </label>
                  <input
                    type='text'
                    name='instagram'
                    value={datos.instagram}
                    placeholder='@tuinstagram'
                    id='instagram'
                    className='form-control'
                    onChange={handleInputChange}
                  />
                  <label htmlFor='phone' className='form-label my-2'>
                    Tel./Whatsapp *
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={datos.phone}
                    placeholder='(Codigo de área)Numero de teléfono'
                    id='phone'
                    className='form-control'
                    required
                    onChange={handleInputChange}
                  />{' '}
                </div>
              </div>
              <div className='col-md-8 col-sm-12 my-3'>
                <div className='bg-white'>
                  <ShoppingCart />
                  {}
                </div>
              </div>
            </div>{' '}
          </form>
        </div>
      </div>
    </>
  );
}
