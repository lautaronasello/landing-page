import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import LoginButton from './LoginButton';
import { LogoutButton } from './LogoutButton';
import ShoppingCart from './ShoppingCart';

export default function Navigate({ products, combo }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const [user, setUser] = useState();
  console.log('desde nav ', user);
  const handleAuth = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => console.log(error.code));
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        window.location.href = '/homepage';
      })
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  };
  return (
    <Navbar
      expand='lg'
      className='bg-nav shadow bg-gradient fixed-top'
      style={{ background: '#ecd3c0' }}
    >
      <Navbar.Brand href='/homepage' className='ml-2 hand pt-3 my-0'>
        <h4 className='font-size'>menos caos por favor</h4>{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto ml-4'>
          <div className='nav-link'>
            <Link
              className='hand'
              activeClass='active'
              to='inicio'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              INICIO
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              className='hand'
              activeClass='active'
              to='who'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              QUIENES SOMOS
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              className='hand'
              activeClass='active'
              to='buy'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              QUIERO COMPRAR
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              className='hand'
              activeClass='active'
              to='learn'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              QUIERO APRENDER
            </Link>
          </div>
          <div className='nav-link'>
            <Link
              className='hand'
              activeClass='active'
              to='wholesalers'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              MAYORISTAS
            </Link>
          </div>
        </Nav>
        <div className='nav-link'>
          {user ? (
            <LogoutButton user={user} handleLogout={handleLogout} />
          ) : (
            <LoginButton handleAuth={handleAuth} />
          )}
        </div>
        <ShoppingCart products={products} combo={combo} />

        <a
          href='https://www.instagram.com/menoscaosporfavor/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          <img
            width={45}
            height={45}
            className='mr-3'
            src='https://image.flaticon.com/icons/png/512/2175/2175198.png'
            alt='Instagram MenosCaos'
          />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
