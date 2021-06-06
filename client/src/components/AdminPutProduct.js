import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FormGroup, Form, FormControl, InputGroup } from 'react-bootstrap';

export default function AdminPutProduct({ products, jwt, combo }) {
  const [productsPut, setProductsPut] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [name, setName] = useState('Ultimo producto');
  const [description, setDescription] = useState(
    'Producto nuevo de menos caos por favor'
  );
  const [updatedName, setUpdatedName] = useState();

  let selectCombo = [];

  function handleComboChange(e) {
    var checked = e.target.checked;
    let value = parseInt(e.target.name);
    if (checked) {
      selectCombo.push(parseInt(value));
    } else {
      removeItemFromArr(selectCombo, value);
    }
  }

  var removeItemFromArr = (arr, item) => {
    var i = arr.indexOf(item);
    i !== -1 && arr.splice(i, 1);
  };

  function handleStockChange(e) {
    let value = e.target.value;
    setStock(value);
  }
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

  function handleChange(e) {
    let value = e.target.value;
    setProductsPut(value);
    setUpdatedName(e.target.selectedOptions[0].id);

    console.log(e);
  }

  var handleSubmit = async () => {
    await axios
      .put(
        `https://menoscaosporfavorstrapi.herokuapp.com/${productsPut}`,
        {
          name: name,
          description: description,
          price: price,
          stock: stock,
          combos: selectCombo,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => alert(`${updatedName} se actualizo con exito!`))
      .catch((err) => alert('hubo un problema actualizando el producto'));
  };

  return (
    <div className='col-12 px-5 mt-3'>
      <h1>ACTUALIZAR PRODUCTO</h1>
      <FormGroup>
        <Form.Control
          className='mb-3'
          onChange={handleChange}
          as='select'
          required
          defaultValue='default'
        >
          <option disabled value='default'>
            Elegir producto a Actualizar
          </option>
          ;
          {products &&
            products.map((data) => {
              return (
                <>
                  <option key={data.id} id={data.name} value={data.id}>
                    {data.name}
                  </option>
                </>
              );
            })}
        </Form.Control>
      </FormGroup>
      <div className='text-left'>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>Nombre</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder='Name'
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
        <label htmlFor='exampleFormControlFile1'>
          Primero hacer click en SUBIR antes que en agregar producto{' '}
        </label>
        <div className='mb-3'>
          {combo &&
            combo.map((data, i) => {
              return (
                <Form.Check
                  onChange={handleComboChange}
                  key={data.id}
                  inline
                  label={data.name}
                  name={data.id}
                  type='checkbox'
                  id={`inline-checkbox-${i + 1}`}
                />
              );
            })}
        </div>
      </div>
      <button
        type='reset'
        className='btn btn-outline-dark'
        onClick={handleSubmit}
      >
        Actualizar
      </button>
    </div>
  );
}
