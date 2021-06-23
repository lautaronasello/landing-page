import React from 'react';
import BackNav from '../components/back-nav';
export default function successPayment() {
  return (
    <div>
      <BackNav />
      <div
        className='justify-content-center align-items-center d-flex flex-column'
        style={{ minHeight: '80vh' }}
      >
        <h1>Tu compra fue realizada con exito!</h1>
        <h3>Gracias por comprar en Menos Caos</h3>
        <a className='btn btn-primary' href='/homepage'>
          Volver a inicio
        </a>
      </div>
    </div>
  );
}
