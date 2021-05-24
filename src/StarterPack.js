import React from 'react';
import imgtest from './components/products-img/productos.jpeg';

export default function StarterPack() {
  return (
    <>
      <div
        className='container d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='card mt-4 p-5'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Combo Starter Pack</h1>
              <h3 className='mt-5 pt-4'>AR$425</h3>
              <button className='btn btn-primary'>Agregar al carrito</button>
            </div>
            <div
              className='col-lg-6 text-center border border-light rounded-3'
              style={{ backgroundColor: '#ecd3c0' }}
            >
              <img
                src={imgtest}
                alt='combo starter pack'
                style={{ width: '13rem', height: '13rem' }}
              />
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12'>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                suscipit impedit illo cum, non aperiam unde id deserunt
                molestiae maxime assumenda reprehenderit iste explicabo
                laudantium nobis molestias? Nobis eaque saepe fugiat ullam animi
                pariatur dolorum at ducimus aut natus officiis repudiandae
                excepturi iure reprehenderit cumque, voluptatum similique rerum
                nemo. Quam? Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quis praesentium cumque voluptates, voluptatum sequi
                inventore tempora, cum eaque perferendis quam, voluptatem atque
                ad iure blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
