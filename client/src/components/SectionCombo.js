import React from 'react';
import CardSell from './CardSell';

export default function SectionCombo({ combo }) {
  const style = {
    width: '300px',
    minHeight: '400px',
  };

  const minHeightStyle = {
    minHeight: '135px',
  };

  const content = combo.map((data) => (
    <CardSell
      nameCombo={data.name}
      prods={data.products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
      price={data.price}
      style={style}
      link={data.link}
      key={data.id}
      id={data.id}
      minHeightStyle={minHeightStyle}
      classNameH5Div={'ps-3 pt-1'}
    />
  ));

  return (
    <section className='carousel1 col-12 '>
      <div className='carousel__container'>{content}</div>
    </section>
  );
}
