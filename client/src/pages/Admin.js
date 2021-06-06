import React, { useState, useEffect } from 'react';
import BackNav from '../components/back-nav';
import ProductAdmin from '../components/ProductAdmin';
import axios from 'axios';
import ComboAdmin from '../components/ComboAdmin';
import firebase from 'firebase/app';

export default function Admin() {
  const [userAdmin, setUserAdmin] = useState('');
  const [loading, setLoading] = useState(true);
  const [jwt, setJwt] = useState();
  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
        setUserAdmin(user);
      }
    });
  }, [userAdmin]);

  var ActualUrl = window.location.pathname;

  useEffect(() => {
    if (ActualUrl === '/admin') {
      axios
        .post('https://menoscaosporfavorstrapi.herokuapp.com/auth/local', {
          identifier: userAdmin.email,
          password: 'ciberiano',
        })
        .then((res) => res.data && setJwt(res.data.jwt))
        .catch((err) => console.log(err));
    }
  }, [ActualUrl, userAdmin]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let canceled;
    const getProducts = async () => {
      const res = await axios.get(
        'https://menoscaosporfavorstrapi.herokuapp.com/products/',
        {
          canceledToken: new axios.CancelToken((c) => (canceled = c)),
        }
      );
      setProducts(res.data);
    };
    getProducts();

    return () => canceled;
  }, []);

  useEffect(() => {
    let cancel;
    const getCombos = async () => {
      const res = await axios.get(
        'https://menoscaosporfavorstrapi.herokuapp.com/combos/',
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      );
      setCombo(res.data);
    };
    getCombos();
    return () => cancel;
  }, []);

  const [combo, setCombo] = useState([]);
  const [sectionAppears, setSectionAppears] = useState('combos');

  var changeToCombos = () => {
    setSectionAppears('combos');
  };

  var changeToProducts = () => {
    setSectionAppears('products');
  };

  if (loading)
    return (
      <div className='container'>
        <div className='row text-center justify-content-center'>
          <div className='col-6'>
            <div className='spinner-border text-warning mt-5' role='status'>
              <span className='visually-hidden' />
            </div>
          </div>
        </div>
      </div>
    );

  if (userAdmin.uid === 'I3dKx9Fc81ZLrPOUAAktWKd5IAi2') {
    return (
      <div>
        <BackNav />
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h3>Hacé click en la seccion a modificar</h3>
              <hr />

              <button
                className='btn btn-outline-dark mx-2'
                onClick={changeToCombos}
              >
                Combos
              </button>

              <button
                className='btn btn-outline-dark mx-2'
                onClick={changeToProducts}
              >
                Productos
              </button>
            </div>
          </div>
        </div>
        <div className='text-center my-5' style={{ background: '#ecd3c0' }}>
          {sectionAppears === 'products' ? (
            <ProductAdmin
              jwt={jwt}
              userAdmin={userAdmin}
              combo={combo}
              products={products}
            />
          ) : (
            <ComboAdmin jwt={jwt} combo={combo} />
          )}
        </div>
      </div>
    );
  } else
    return (
      <div
        className='justify-content-center align-items-center d-flex'
        style={{ minHeight: '100vh' }}
      >
        <h1>NO TENES ACCESO A ESTA PARTE DE LA PAGINA :)</h1>
      </div>
    );
}
