import React from 'react';
import CardSell from './CardSell';

export default function SectionProducts({ products }) {
  const style = {
    width: '300px',
    minHeight: '350px',
  };

  const minHeightStyle = {
    minHeight: '65px',
  };

  const content = products.map((data) => (
    <CardSell
      nameCombo={data.name}
      stock={data.stock}
      price={data.price}
      prods={data.stock === 0 && <p style={{ color: 'red' }}>*Sin Stock</p>}
      style={style}
      key={data.id}
      data={data}
      id={data.id}
      minHeightStyle={minHeightStyle}
      classNameH5Div={
        data.stock > 0
          ? 'pt-1 ps-3 justify-content-center align-items-center d-flex'
          : 'pt-1 ps-3'
      }
    />
  ));

  return (
    <section className='carousel1 col-12'>
      <div className='carousel__container'>{content}</div>
    </section>
  );
}
