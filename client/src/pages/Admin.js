import React, { useState } from 'react';
import BackNav from '../components/back-nav';
import ComboAdmin from '../components/ComboAdmin';
import ProductAdmin from '../components/ProductAdmin';

export default function Admin() {
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
        {sectionAppears === 'combos' ? <ComboAdmin /> : <ProductAdmin />}
      </div>
    </div>
  );
}
