import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Img from './img';
import imgtest from './products-img/prod-apilados.jpeg';

export default function CardSell({
  nameCombo,
  prods,
  price,
  key1,
  key2,
  key4,
}) {
  return (
    <Card style={{ width: '240px', borderRadius: '20px' }}>
      <Img img={imgtest} alt='altraro' />
      <Card.Body>
        <Card.Title className='text-center' key={key1}>
          {nameCombo}{' '}
        </Card.Title>
        <ul>{prods}</ul>
        <div className='d-grip gap-2 d-md-flex justify-content-md-end'>
          <Button variant='primary' key={key4}>
            AR${price}{' '}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
