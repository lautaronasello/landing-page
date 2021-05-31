import React from 'react';
import CardSell from './CardSell';

export default function SectionProducts({ products }) {
  const style = {
    width: '300px',
    minHeight: '350px',
  };

  const minHeightStyle = {
    minHeight: '110px',
  };

  const content = products.map((data) => (
    <CardSell
      nameCombo={data.name}
      stock={data.stock}
      price={data.price}
      prods={
        data.stock > 0 ? null : <p style={{ color: 'red' }}>*No hay stock</p>
      }
      style={style}
      key={data.id}
      data={data}
      id={data.id}
      minHeightStyle={minHeightStyle}
    />
  ));

  return (
    <section className='carousel1 col-12'>
      <div className='carousel__container'>{content}</div>
    </section>
  );
}
