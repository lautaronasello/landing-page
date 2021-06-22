import React, { useEffect, useState } from 'react';
import CardSell from './CardSell';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import imgTest from './products-img/productos-1.jpeg';

export default function SectionCombo({ combo }) {
  const [loading, setLoading] = useState(true);
  const style = {
    width: '280px',
    backgroundColor: 'white',
  };

  const minHeightStyle = null;
  // minHeight: '135px',

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
  ];

  useEffect(() => {
    combo.length !== 0 && setLoading(false);
  }, [combo]);

  if (loading) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '350px' }}
      >
        <div className='spinner-border text-warning' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Carousel breakPoints={breakPoints} itemsToShow={4}>
          {combo.map((data, index) => (
            <React.Fragment key={data.id + index}>
              <Item key={index}>
                <CardSell
                  image={data.image ? data.image : imgTest}
                  name={data.name}
                  prods={data.products.map((p) => (
                    <p className='fs-6' key={p.id}>
                      {p.name}
                    </p>
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
              </Item>
            </React.Fragment>
          ))}
        </Carousel>
      </>
    );
  }
}
