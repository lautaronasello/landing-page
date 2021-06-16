import React, { useEffect, useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardSell from './CardSell';

export default function SectionCombo({ combo }) {
  const [loading, setLoading] = useState(true);

  const style = {
    width: '300px',
    // minHeight: '420px',
    backgroundColor: 'white',
  };

  const minHeightStyle = {
    minHeight: '135px',
  };

  const content = combo.map((data) => (
    <CardSell
      image={data.image}
      name={data.name}
      prods={data.products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
      price={data.price}
      style={style}
      link={data.link}
      key={data.id}
      id={data.id}
      description={data.description}
      minHeightStyle={minHeightStyle}
      classNameH5Div={'ps-3 pt-1'}
    />
  ));

  useEffect(() => {
    content.length !== 0 && setLoading(false);
  }, [content]);

  if (loading) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='spinner-border text-warning' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  } else {
    let slider = document.querySelector('#carousel__container');
    if (slider) console.log('este es el slide', slider);
    let sliderSection = document.querySelectorAll('.carousel-item1');
    console.log('este es el sliderSection', sliderSection);
    var sliderSectionLast = sliderSection[sliderSection.length - 1];

    if (slider) slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    function Next() {
      let sliderSectionFirst = document.querySelectorAll('.carousel-item1')[0];
      slider.style.marginLeft = '-20%';
      slider.style.transition = 'all 0.5s';
      setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-10%';
      }, 500);
    }

    return (
      <>
        <div className='row'>
          <div className='col-1'>
            <div className='carousel__btn carousel__btn--left' id='btn-left'>
              <FontAwesomeIcon
                className='me-1 mb-1'
                icon={faChevronLeft}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className='col-10 justify-content-center'>
            <section className='carousel1'>
              <div className='carousel__container' id='carousel__container'>
                {content}
              </div>
            </section>
          </div>
          <div className='col-1'>
            <div
              onClick={Next}
              className='carousel__btn carousel__btn--right'
              id='btn-right'
            >
              <FontAwesomeIcon
                className='ms-2 mb-1'
                icon={faChevronRight}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </>
    );
  }
}
