import React from 'react';
import Img from './img';
import imgtest from './products-img/prod-apilados.jpeg';

export default function CardSell({
  nameCombo,
  prods,
  price,
  key0,
  key1,
  style,
  key3,
  key4,
}) {
  return (
    <div
      key={key0}
      className='mx-4 carousel-item1 card text-break'
      style={style}
    >
      <Img img={imgtest} alt='altraro' />
      <div className='card-body'>
        <div className='text-break'>
          <h5 className='card-title text-center' key={key1}>
            {nameCombo}
          </h5>
        </div>
        <ul key={key3}>{prods}</ul>
        <div className='d-grip gap-2 d-md-flex justify-content-md-end'>
          <button type='button' className='btn btn-primary btn-sm' key={key4}>
            AR${price}{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
