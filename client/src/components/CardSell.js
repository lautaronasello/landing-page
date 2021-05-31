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
    <div className='mt-4 me-4 ms-1 carousel-item1  rounded-0' style={style}>
      <Img img={imgtest} alt='alt raro' />
      <div className='p-3' style={minHeightStyle}>
        <h5 className=''>{nameCombo}</h5>
        <div>{prods}</div>
      </div>
      <div className='card-body row'>
        {stock === 0 ? (
          <button
            className='btn btn-primary btn-sm disabled'
            onClick={() => addToCart()}
          >
            AR${price}
          </button>
        ) : (
          <button
            className='btn btn-primary btn-sm shadow'
            onClick={() => addToCart()}
          >
            AR${price}
          </button>
        )}
      </div>
    </div>
  );
}

/* <div className='my-4 me-4 ms-1 carousel-item1 card ' style={style}>
      <Img img={imgtest} alt='alt raro' />
      <div className='p-3' style={minHeightStyle}>
        <h5 className=''>{nameCombo}</h5>
        <div>{prods}</div>
      </div>
      <div className='card-body'>
        {stock === 0 ? (
          <button
            className='btn btn-primary btn-sm disabled '
            onClick={() => addToCart()}
          >
            AR${price}
          </button>
        ) : (
          <button
            className='btn btn-primary btn-sm'
            onClick={() => addToCart()}
          >
            AR${price}
          </button>
        )}
      </div>
    </div> */
