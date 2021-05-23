import React from 'react';
import CardSell from './CardSell';

export default function SectionProducts({ products }) {
  const style = {
    width: '230px',
    height: '25rem',
  };

  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {products.map((data) => {
          return (
            <>
              <CardSell
                key0={data[0].update_at}
                key1={data[0].id}
                nameCombo={[<br />, data[0].name]}
                key4={data[0].created_at}
                price={data[0].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[1].id}
                nameCombo={['Lista de ', <br />, 'pendientes']}
                key4={data[1].created_at}
                price={data[1].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[2].id}
                nameCombo={[<br />, data[2].name]}
                key4={data[2].created_at}
                price={data[2].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[3].id}
                nameCombo={[<br />, data[3].name]}
                key4={data[3].created_at}
                price={data[3].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[4].id}
                nameCombo={[<br />, data[4].name]}
                key4={data[4].created_at}
                price={data[4].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[5].id}
                nameCombo={[<br />, data[5].name]}
                key4={data[5].created_at}
                price={data[5].price}
                style={style}
              />
              <CardSell
                key0={data[0].update_at}
                key1={data[6].id}
                nameCombo={['Block resúmen ', <br />, 'capítulo']}
                key4={data[6].created_at}
                price={data[6].price}
                style={style}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}
