import React from 'react';

export default function Img(props) {
  const { img, alt } = props;

  return (
    <div
      className='text-center p-3 d-inline-block'
      style={{ backgroundColor: '#ecd3c0' }}
    >
      <img src={img} className='img-fluid' alt={alt} />
    </div>
  );
}