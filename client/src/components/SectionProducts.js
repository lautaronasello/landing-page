import React, { useEffect, useState } from 'react';
import CardSell from './CardSell';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import imgTest from './products-img/productos-1.jpeg';

export default function SectionProducts({ products }) {
  const [loading, setLoading] = useState(true);

  const style = {
    width: '280px',
    minHeight: '320px',
    backgroundColor: 'white',
  };

  const minHeightStyle = {
    minHeight: '65px',
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, pagination: false },
    { width: 700, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 900, itemsToShow: 4, pagination: false },
  ];

  useEffect(() => {
    products.length !== 0 && setLoading(false);
  }, [products]);

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
        <div className='heightProducts'>
          <Carousel breakPoints={breakPoints} itemsToShow={3}>
            {products.map((data, index) => (
              <React.Fragment key={data.id + index}>
                <Item key={index}>
                  <CardSell
                    image={data.image ? data.image : imgTest}
                    name={data.name}
                    stock={data.stock}
                    price={data.price}
                    prods={
                      data.stock === 0 && (
                        <p style={{ color: 'red' }}>*Sin Stock</p>
                      )
                    }
                    style={style}
                    key={data.id}
                    data={data}
                    description={data.description}
                    id={data.id}
                    minHeightStyle={minHeightStyle}
                    classNameH5Div={
                      data.stock > 0
                        ? 'pt-1 ps-3 justify-content-center align-items-center d-flex'
                        : 'pt-1 ps-3'
                    }
                  />
                </Item>
              </React.Fragment>
            ))}
          </Carousel>
        </div>
      </>
    );
  }
}
