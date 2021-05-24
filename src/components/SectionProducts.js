import React from 'react';
import CardSell from './CardSell';

export default function SectionProducts({ products }) {
  const style = {
    width: '250px',
  };

  const content = products.map((data) => (
    <CardSell
      nameCombo={data.name}
      price={data.price}
      prods={`Stock: ${data.stock}`}
      style={style}
      link={data.link}
      key={data.id}
    />
  ));

  return (
    <section className='carousel1'>
      <div className='carousel__container'>{content}</div>
    </section>
  );
}
