import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function BackNav() {
  return (
    <Navbar
      expand='lg'
      className='bg-nav shadow bg-gradient'
      style={{ background: '#ecd3c0' }}
    >
      <Navbar.Brand className='mx-5 text-decoration-underline' href='/homepage'>
        Volver
      </Navbar.Brand>
    </Navbar>
  );
}
