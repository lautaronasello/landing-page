import React, { useState, useEffect } from 'react';
import BackNav from '../components/back-nav';
import ProductAdmin from '../components/ProductAdmin';
import axios from 'axios';
import ComboAdmin from '../components/ComboAdmin';

export default function Admin() {
  useEffect(() => {
    let canceled;
    const getProducts = async () => {
      const res = await axios.get('http://localhost:1337/products/', {
        canceledToken: new axios.CancelToken((c) => (canceled = c)),
      });
      setProducts(res.data);
    };
    getProducts();

    return () => canceled;
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cancel;
    const getCombos = async () => {
      const res = await axios.get('http://localhost:1337/combos/', {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      });
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
          <ProductAdmin combo={combo} products={products} />
        ) : (
          <ComboAdmin combo={combo} />
        )}
      </div>
    </div>
  );
}
