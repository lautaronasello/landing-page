import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackNav() {
  return (
    <Navbar expand='lg' className='bg-nav shadow bg-gradient fixed-top'>
      <Navbar.Brand href='/homepage'>
        <FontAwesomeIcon
          className='d-inline-block  mx-3'
          style={{ width: '25', height: '25' }}
          icon={faArrowLeft}
        />
        Volver
      </Navbar.Brand>
    </Navbar>
  );
}
