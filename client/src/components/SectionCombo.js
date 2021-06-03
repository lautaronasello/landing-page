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

/* <CardSell
key1={data[1].id}
nameCombo={data[1].name}
key2={data[1].products[0].published_at}
prods={[
  <li className='fs-6' key={data[1].products[0].name}>
    {data[1].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[1].products[1].name}>
    {data[1].products[1].name}{' '}
  </li>,
  <li className='fs-6 mb-4' key={data[1].products[2].name}>
    {data[1].products[2].name}{' '}
  </li>,
]}
key4={data[1].created_at}
price={data[1].price}
style={style}
/>
<CardSell
key1={data[2].id}
nameCombo={data[2].name}
key2={data[2].products[0].published_at}
prods={[
  <li className='fs-6' key={data[2].products[0].name}>
    {data[2].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[2].products[1].name}>
    {data[2].products[1].name}{' '}
  </li>,
  <li className='fs-6 mb-4' key={data[2].products[2].name}>
    {data[2].products[2].name}{' '}
  </li>,
]}
key4={data[2].created_at}
price={data[2].price}
style={style}
/>
<CardSell
key1={data[3].id}
nameCombo={data[3].name}
key2={data[3].products[0].published_at}
prods={[
  <li className='fs-6' key={data[3].products[0].name}>
    {data[3].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[3].products[1].name}>
    {data[3].products[1].name}{' '}
  </li>,
  <li className='fs-6 mb-4' style={{ color: 'white' }}></li>,
]}
key4={data[3].created_at}
price={data[3].price}
style={style}
/>
<CardSell
key1={data[4].id}
nameCombo={['DOS PIENSAN MEJOR', <br />, 'QUE UNO']}
key2={data[4].products[0].published_at}
prods={[
  <li className='fs-6' key={data[4].products[0].name}>
    {data[4].products[0].name}{' '}
  </li>,
  <li className='fs-6 mb-4' key={data[4].products[1].name}>
    {data[4].products[1].name}{' '}
  </li>,
]}
key4={data[4].created_at}
price={data[4].price}
style={style}
/>
<CardSell
key1={data[5].id}
nameCombo={data[5].name}
key2={data[5].products[0].published_at}
prods={[
  <li className='fs-6' key={data[5].products[0].name}>
    {data[5].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[5].products[1].name}>
    {data[5].products[1].name}{' '}
  </li>,
  <li className='fs-6 mb-4' key={data[5].products[2].name}>
    {data[5].products[2].name}{' '}
  </li>,
]}
key4={data[5].created_at}
price={data[5].price}
style={style}
/>
<CardSell
key1={data[6].id}
nameCombo={[data[6].name]}
key2={data[6].products[0].published_at}
prods={[
  <li className='fs-6' key={data[6].products[0].name}>
    {data[6].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[6].products[1].name}>
    {data[6].products[1].name}{' '}
  </li>,
  <li className='fs-6 mb-4' style={{ color: 'white' }}></li>,
]}
key4={data[6].created_at}
price={data[6].price}
style={style}
/>
<CardSell
key1={data[7].id}
nameCombo={data[7].name}
key2={data[7].products[0].published_at}
prods={[
  <li className='fs-6' key={data[7].products[0].name}>
    {data[7].products[0].name}{' '}
  </li>,
  <li className='fs-6' key={data[7].products[1].name}>
    {data[7].products[1].name}{' '}
  </li>,
  <li className='fs-6' key={data[7].products[2].name}>
    {data[7].products[2].name}{' '}
  </li>,
  <li className='fs-6' key={data[7].products[3].name}>
    {data[7].products[3].name}{' '}
  </li>,
]}
key4={data[7].created_at}
price={data[7].price}
style={style}
/> */
