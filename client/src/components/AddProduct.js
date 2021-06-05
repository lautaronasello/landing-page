import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap';
export default function AddProduct() {
  const [name, setName] = useState('Nombre y Apellido');
  const [description, setDescription] = useState('Descripcion del producto');
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  function handleNameChange(e) {
    let value = e.target.value;
    setName(value);
  }

  function handleDescriptionChange(e) {
    let value = e.target.value;
    setDescription(value);
  }

  function handlePriceChange(e) {
    let value = e.target.value;
    setPrice(value);
  }

  function handleStockChange(e) {
    let value = e.target.value;
    setStock(value);
  }

  function escribirDatos() {
    console.log(name, description, price, stock);
  }

  var handleSubmit = async () => {
    await axios
      .delete(
        'http://localhost:1337/products/14',
        // {
        //   name: name,
        //   description: description,
        //   price: price,
        //   stock: stock,
        // },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIyODQ4OTM2LCJleHAiOjE2MjU0NDA5MzZ9.WPosF_Eu8C-BRbV7Ur0Z0t2nrSvibCNi4QO7jdfZ9NE',
          },
        }
      )
      .then((res) => {
        if (res.err) {
          alert('hay error');
        } else {
          alert('se subieron los datos!');
        }
      });
  };

  return (
    <div className='col-12 px-5 pt-5 pb-3'>
      <div>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>Nombre</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            name='name'
            onChange={handleNameChange}
          />
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>Stock</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label='Amount (to the nearest dollar)'
            onChange={handleStockChange}
            name='stock'
          />
        </InputGroup>

        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>Precio AR$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label='Amount (to the nearest dollar)'
            onChange={handlePriceChange}
            name='price'
          />
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Descripcion</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as='textarea'
            aria-label='With textarea'
            onChange={handleDescriptionChange}
            name='description'
          />
        </InputGroup>
      </div>
      <button className='btn btn-outline-dark mt-3' onClick={handleSubmit}>
        escribir datos
      </button>
    </div>
  );
}
