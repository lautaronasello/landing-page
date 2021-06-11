import React, { useState, useEffect } from 'react';
import Img from './img';
import imgtest from './products-img/prod-apilados.jpeg';
import { db } from '../index';
import firebase from 'firebase/app';

export default function CardSell({
  nameCombo,
  prods,
  price,
  style,
  stock,
  id,
  minHeightStyle,
  classNameH5Div,
}) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const [user, setUser] = useState();

  const addToCart = () => {
    if (user) {
      db.collection(user.email)
        .doc(`${nameCombo}`)
        .set({
          id: `${id}`,
          name: `${nameCombo}`,
          price: `${price}`,
          qty: 1,
        })
        .then(() => {})
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
    <div
      className={`mt-4 me-4 ms-1 carousel-item1  rounded-0 text-center ${(stock =
        !0 && 'handSell')} `}
      style={style}
      onClick={(stock = !0 && addToCart)}
    >
      <Img img={imgtest} alt='alt raro' />
      <div className={classNameH5Div} style={minHeightStyle}>
        <h5>{nameCombo}</h5>
        <div className='text-left'>{prods}</div>
      </div>
      <div className=' row px-3'></div>
    </div>
  );
}
