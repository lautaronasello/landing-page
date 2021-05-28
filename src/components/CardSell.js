import React from 'react';
import { Link } from 'react-router-dom';
import Img from './img';
import imgtest from './products-img/prod-apilados.jpeg';

export default function CardSell({ nameCombo, prods, price, style, link,stock }) {
  return (
    <div className='my-4 me-4 ms-1 carousel-item1 card ' style={style}>
      <Img img={imgtest} alt='alt raro' />
      <div className='card-body'>
        <h5 className='card-title'>{nameCombo}</h5>
        <p className='card-text'>{prods}</p>
        <div className='d-grip gap-2 d-md-flex justify-content-md-end'>
            {stock===0? <Link className='btn btn-primary btn-sm disabled' to={link}>
            AR${price}
          </Link>
          :<Link className='btn btn-primary btn-sm' to={link}>
            AR${price}
          </Link>
            }
        </div>
      </div>
    </div>
  );
}
