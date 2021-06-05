import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

export default function AdminPostProduct({ combo }) {
  const [name, setName] = useState('Nombre y Apellido');
  const [description, setDescription] = useState('Descripcion del producto');
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [selectCombo, setSelectCombo] = useState();

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

  function handleComboChange(e) {
    let value = e.target.value;
    setSelectCombo(value);
  }

  function handleStockChange(e) {
    let value = e.target.value;
    setStock(value);
  }

  var handleSubmit = async () => {
    await axios
      .post(
        'http://localhost:1337/products/',
        {
          name: name,
          description: description,
          price: price,
          stock: stock,
          combos: [6, 3],
        },
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
    <div className='col-12 px-5 mt-3 pb-3'>
      <h1>AGREGAR PRODUCTO NUEVO</h1>
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

        <InputGroup className='mb-3'>
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

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Combo</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            as='select'
            id='inlineFormCustomSelect'
            onChange={handleComboChange}
            custom
          >
            <option value='null'>Ninguno</option>
            {combo &&
              combo.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
          </Form.Control>
        </InputGroup>
        <div className='text-right'>
          <button className='btn text-decoration-underline'>
            agregar a otro combo
          </button>
        </div>
      </div>
      <button className='btn btn-outline-dark mt-3' onClick={handleSubmit}>
        escribir datos
      </button>
    </div>
  );
}
