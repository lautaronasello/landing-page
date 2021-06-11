import React, { useEffect, useState } from 'react';
import { db, fs } from '../index';
import firebase from 'firebase/app';

export default function ShoppingCart({ subTotal }) {
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
    if (item.qty === 1) {
      db.collection(database).doc(`${item.name}`).delete();
    }
  }

  function total() {
    var x = 0;
    for (let i = 0; i < cart.length; i++) {
      x += cart[i].price * cart[i].qty;
    }
    return x;
  }

  return (
    <>
      <div
        className='overflow-visible'
        style={{ minWidth: '340px', maxHeight: '500px' }}
      >
        <table className='table text-center '>
          <thead>
            <tr>
              <th scope='col'>Producto</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>AR${i.price}</td>
                <td>{i.qty}</td>
                <td className='my-auto text-center '>
                  <p
                    onClick={() => decrease(i)}
                    className='hand d-inline fw-bold mx-1 fs-5'
                  >
                    -
                  </p>
                  <p
                    onClick={() => increase(i)}
                    className='hand d-inline fw-bold mx-1 fs-5'
                  >
                    +
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-2 pe-2 text-right'>
        {subTotal ? (
          <p>SUBTOTAL: AR${subTotal}</p>
        ) : (
          <p>SUBTOTAL: AR${total()}</p>
        )}
      </div>
      <div className='text-center'>
        {ActualUrl.pathname === '/homepage' ? (
          <button
            className='btn btn-sm btn-primary'
            onClick={() => (window.location = '/checkout')}
          >
            Comprar
          </button>
        ) : (
          <>
            <input
              type='submit'
              value='Comprar'
              className='btn btn-sm btn-primary'
            />
          </>
        )}
      </div>
    </>
  );
}
