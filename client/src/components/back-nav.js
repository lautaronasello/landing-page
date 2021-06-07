import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function BackNav() {
  return (
    <Navbar
      expand='lg'
      className='bg-nav shadow bg-gradient align-items-center d-flex'
      style={{ background: '#ecd3c0' }}
    >
      <Navbar.Brand className='mx-5 text-decoration-underline' href='/homepage'>
        Volver
      </Navbar.Brand>
      <h5 className='align-items-center'>Menos caos por favor</h5>
    </Navbar>
  );
}
