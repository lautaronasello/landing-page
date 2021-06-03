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
    db.collection(user.email)
      .doc(`${nameCombo}`)
      .set({
        id: `${id}`,
        name: `${nameCombo}`,
        price: `${price}`,
        qty: 1,
      })
      .then(() => {
        console.log('se subio bien');
      })
      .catch((e) => {
        console.error('error: ', e);
      });
  };

  return (
    <div className='mt-4 me-4 ms-1 carousel-item1  rounded-0 ' style={style}>
      <Img img={imgtest} alt='alt raro' />
      <div className={classNameH5Div} style={minHeightStyle}>
        <h5>{nameCombo}</h5>
        <div>{prods}</div>
      </div>
      <div className=' row px-3'>
        {stock === 0 ? (
          <button className='btn btn-primary disabled'>AR${price}</button>
        ) : (
          <button
            className='btn btn-primary shadow'
            onClick={() => addToCart()}
          >
            AR${price}
          </button>
        )}
      </div>
    </div>
  );
}
