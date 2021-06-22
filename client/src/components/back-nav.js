import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function BackNav() {
  return (
    <Navbar
      expand='lg'
      className='bg-nav shadow bg-gradient'
      style={{ background: '#ecd3c0' }}
    >
      <Navbar.Brand
        className='mx-5  text-decoration-underline'
        href='/homepage'
      >
        <p className='text-dark m'>Volver</p>
      </Navbar.Brand>
      <h3 className='align-items-center mt-1'>Menos caos por favor</h3>
    </Navbar>
  );
}
