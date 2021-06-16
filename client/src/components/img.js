import React from 'react';

export default function Img(props) {
  const { img, alt } = props;

  return (
    <div className='text-center d-inline-block'>
      <img src={img} className='img-fluid' alt={alt} />
    </div>
  );
}
