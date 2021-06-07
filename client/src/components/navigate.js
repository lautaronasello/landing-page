import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import LoginButton from './LoginButton';
import { LogoutButton } from './LogoutButton';
import CartButton from './CartButton';

export default function Navigate({ products, combo, primerUser }) {
  const handleAuth = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => console.log(error.code));
  };
  useEffect(() => {
    primerUser && setUser(primerUser);
  }, [primerUser]);
  const [user, setUser] = useState('');
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
      <Link
        className='ml-2 hand pt-2 my-auto'
        activeClass='active'
        to='inicio'
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <h4 className='font-size'>menos caos por favor</h4>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto ml-4'>
          {user.uid === 'I3dKx9Fc81ZLrPOUAAktWKd5IAi2' ||
            (user.uid === '1W93mjqaizcxJOnQ64XsSY03mGA2' && (
              <div className='nav-link'>
                <a href='/admin' className=' hand'>
                  ADMIN
                </a>
              </div>
            ))}
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
        <CartButton products={products} combo={combo} />

        <a
          href='https://www.instagram.com/menoscaosporfavor/'
          target='_blank'
          rel='noopener noreferrer'
          className='ms-4 me-1'
        >
          {' '}
          <img
            width={45}
            height={45}
            src='https://image.flaticon.com/icons/png/512/2175/2175198.png'
            alt='Instagram MenosCaos'
          />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
