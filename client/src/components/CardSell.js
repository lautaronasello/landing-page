import React, { useState, useEffect } from 'react';
import Img from './img';
import { db } from '../index';
import firebase from 'firebase/app';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';

export default function CardSell({
  name,
  prods,
  price,
  style,
  id,
  image,
  description,
  classNameH5Div,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setOpenModal(!openModal);
  var products = document.getElementById('handSell');
  if (products) {
    products.classList.toggle('show');
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  const [user, setUser] = useState();

  var actualWidth = window.screen.width;

  useEffect(() => {
    if (actualWidth < 1000) {
      setIsShown(true);
    }
  }, [actualWidth]);

  const addToCart = () => {
    if (user) {
      db.collection(user.email)
        .doc(`${name}`)
        .set({
          id: `${id}`,
          name: `${name}`,
          price: `${price}`,
          qty: 1,
        })
        .then(() => setOpenModal(false))
        .catch((e) => {
          alert.error('error: ', e);
        });
    } else {
      alert(
        'Necesitas estar conectado con una cuenta de Gmail para poder comprar'
      );
    }
  };

  function modal() {
    toast.success(`Agregaste ${name} al carrito!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addToCart();
  }

  return (
    <>
      <Modal isOpen={openModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <div className='fs-3'>{name}</div>
        </ModalHeader>
        <ModalBody>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <img src={image} alt={name} />
            </div>
            <div className='col-md-6 align-items-center justify-content-center d-flex'>
              <div>
                <p className='text-body fs-4'>ARS${price}</p>
                {description}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-success' onClick={modal}>
            Agregar al Carrito
          </button>
        </ModalFooter>
      </Modal>{' '}
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className='my-3 p-3 rounded text-center d-inline-block shadow handSell transition'
        id='handSell'
        style={style}
        onClick={() => setOpenModal(true)}
      >
        <Img img={image} alt={name} />
        <div className={classNameH5Div}>
          <h5>{name}</h5>
          <p className='fs-6 text-body fw-bold'>ARS${price}</p>
          {isShown && (
            <div className='text-left' id='prods'>
              {prods}
            </div>
          )}
        </div>
        <div className='row px-3'></div>
      </div>
    </>
  );
}
