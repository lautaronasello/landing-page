import React, { useState } from 'react';
import Img from './img';
import { db } from '../index';
import firebase from 'firebase/app';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CardSell({
  name,
  prods,
  price,
  style,
  id,
  image,
  description,
  minHeightStyle,
  classNameH5Div,
}) {
  const [openModal, setOpenModal] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  const [user, setUser] = useState();

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
          console.error('error: ', e);
        });
    } else {
      alert(
        'Necesitas estar conectado con una cuenta de Gmail para poder comprar'
      );
    }
  };
  return (
    <>
      <Modal isOpen={openModal}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          <div className='row'>
            <div className='col-6'>
              <img src={image} alt={name} />
            </div>
            <div className='col-6 align-items-center justify-content-center d-flex'>
              {description}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className='btn btn-danger'
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </button>
          <button className='btn btn-success' onClick={addToCart}>
            Agregar al Carrito
          </button>
        </ModalFooter>
      </Modal>{' '}
      <div
        // className='mt-4 me-4 ms-1 pt-3 carousel-item1'
        className='mt-4 me-4 ms-1 pt-3 carousel-item1 shadow rounded text-center handSell '
        style={style}
        onClick={() => setOpenModal(true)}
      >
        <Img img={image} alt={name} />
        <div className={classNameH5Div} style={minHeightStyle}>
          <h5>{name}</h5>
          <div className='text-left prods'>{prods}</div>
        </div>
        <div className=' row px-3'></div>
      </div>
    </>
  );
}
