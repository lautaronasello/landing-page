// import React from 'react';
// import CardSell from './CardSell';

// export default function SectionProducts({ products }) {
//   const style = {
//     width: '300px',
//     minHeight: '350px',
//     backgroundColor: 'white',
//   };

//   const minHeightStyle = {
//     minHeight: '65px',
//   };

//   const content = products.map((data) => (
//     <CardSell
//       image={data.image}
//       name={data.name}
//       stock={data.stock}
//       price={data.price}
//       prods={data.stock === 0 && <p style={{ color: 'red' }}>*Sin Stock</p>}
//       style={style}
//       key={data.id}
//       data={data}
//       description={data.description}
//       id={data.id}
//       minHeightStyle={minHeightStyle}
//       classNameH5Div={
//         data.stock > 0
//           ? 'pt-1 ps-3 justify-content-center align-items-center d-flex'
//           : 'pt-1 ps-3'
//       }
//     />
//   ));

//   return (
//     <section className='carousel1 col-12'>
//       <div className='carousel__container'>{content}</div>
//     </section>
//   );
// }
