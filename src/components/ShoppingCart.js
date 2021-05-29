import React, { useEffect, useState } from 'react';
import { db, fs } from '../index';
import { DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';

export default function ShoppingCart({ products, combo }) {
  const [database, setDatabase] = useState('data');
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
      setDatabase(user.email);
    });
  }, []);

  const [user, setUser] = useState();

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
  console.log('user desde shopping ', user);
  function increase(item) {
    if (user) {
      db.collection(user.email)
        .doc(`${item.name}`)
        .update({ qty: fs.firestore.FieldValue.increment(1) });
    }
  }
  function decrease(item) {
    if (user) {
      db.collection(user.email)
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
      db.collection(user.email).doc(`${item.name}`).delete();
    }
  }

  return (
    <div className='me-3'>
      <DropdownButton
        variant='light'
        className='py-1'
        menuAlign='right'
        title={
          <FontAwesomeIcon
            className='d-inline-block align-top'
            style={{ width: '20', height: '20' }}
            icon={faShoppingCart}
          />
        }
        id='dropdown-menu-align-responsive-2'
      >
        <div
          className='overflow-auto'
          style={{ minWidth: '35rem', maxHeight: '500px' }}
        >
          <table className='table text-center '>
            <thead>
              <tr>
                <th scope='col-2'>#</th>
                <th scope='col-2'>Producto</th>
                <th scope='col-2'>Precio</th>
                <th scope='col-2'>Cantidad</th>
                <th scope='col-2'></th>
                <th scope='col-2'></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i, index) => (
                <tr key={i.id}>
                  <th scope='row'>{index + 1}</th>

                  <td>{i.name}</td>
                  <td>AR${i.price}</td>
                  <td>{i.qty}</td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className='btn btn-primary btn-sm me-2'
                      style={{ width: '28px' }}
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}
                      className='btn btn-primary btn-sm'
                      size='sm'
                      style={{ width: '28px' }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => removetocart(i)}
                      className='btn btn-danger btn-sm'
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
        <div className='row mt-2'>
          <div className='col-6 text-center'>
            <h4>TOTAL: AR${total()}</h4>
          </div>
          <div className='col-6'>
            <button className='btn btn-primary'>Comprar</button>
          </div>
        </div>
      </DropdownButton>{' '}
    </div>
  );
}
