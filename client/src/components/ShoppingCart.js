import React, { useEffect, useState } from 'react';
import { db, fs } from '../index';
import firebase from 'firebase/app';

export default function ShoppingCart() {
  const [database, setDatabase] = useState('data');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      setDatabase(user.email);
    }
  });
  const [user, setUser] = useState();

  var ActualUrl = window.location;

  useEffect(() => {
    db.collection(database).onSnapshot((querySnapshot) => {
      var p = [];
      querySnapshot.forEach((doc) => {
        p.push(doc.data());
      });

      setCart(p);
    });
  }, [database]);

  const [cart, setCart] = useState([]);

  function increase(item) {
    if (user) {
      db.collection(database)
        .doc(`${item.name}`)
        .update({ qty: fs.firestore.FieldValue.increment(1) });
    }
  }
  function decrease(item) {
    if (user) {
      db.collection(database)
        .doc(`${item.name}`)
        .update({ qty: fs.firestore.FieldValue.increment(-1) });
    }
  }

  function total() {
    let x = 0;
    cart.map((i) => {
      x += i.price * i.qty;
    });
    return x;
  }

  function removetocart(item) {
    if (user) {
      db.collection(database).doc(`${item.name}`).delete();
    }
  }

  return (
    <>
      <div
        className='overflow-auto '
        style={{ minWidth: 'auto', maxHeight: '500px' }}
      >
        <table className='table text-center '>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Producto</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, index) => (
              <tr key={i.id}>
                <th scope='row'>{index + 1}</th>
                <td>{i.name}</td>
                <td>AR${i.price}</td>
                <td>{i.qty}</td>
                <td className='row mx-0 my-auto py-1 px-0 text-center'>
                  <button
                    onClick={() => decrease(i)}
                    className='btn btn-primary btn-sm me-2 m-1'
                    style={{ width: '28px' }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => increase(i)}
                    className='btn btn-primary btn-sm m-1'
                    style={{ width: '28px' }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removetocart(i)}
                    className='btn btn-danger btn-sm m-1'
                    style={{ width: '28px' }}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='row mt-2 text-center ps-3'>
        <h4>TOTAL: AR${total()}</h4>
      </div>
      <div className='text-center my-2'>
        {ActualUrl.pathname === '/homepage' ? (
          <button
            className='btn btn-sm btn-primary'
            onClick={() => (window.location = '/checkout')}
          >
            Checkout
          </button>
        ) : (
          <>
            <input type='hidden' name='title' value='prods.menoscaos' />
            <input type='hidden' name='price' value={total()} />
            <input
              type='submit'
              value='Comprar'
              className='btn btn-sm btn-primary mb-3'
            />
          </>
        )}
      </div>
    </>
  );
}
