import axios from 'axios';
import React, { useState } from 'react';
import { FormGroup, Form, FormControl, InputGroup } from 'react-bootstrap';

export default function AdminPutCombo({ products, jwt, combo }) {
  const [comboPut, setComboPut] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState('Ultimo producto');
  const [description, setDescription] = useState(
    'Producto nuevo de menos caos por favor'
  );
  const [updatedName, setUpdatedName] = useState();

  let selectProduct = [];

  function handleProductChange(e) {
    var checked = e.target.checked;
    let value = e.target.name;
    if (checked) {
      selectProduct.push(value);
    } else {
      removeItemFromArr(selectProduct, value);
    }
    console.log(selectProduct, 'checked: ', checked, ', value: ', value);
  }

  var removeItemFromArr = (arr, item) => {
    var i = arr.indexOf(item);
    i !== -1 && arr.splice(i, 1);
  };

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
    setComboPut(value);
    setUpdatedName(e.target.selectedOptions[0].id);
  }

  var handleSubmit = async () => {
    await axios
      .put(
        `https://menoscaosporfavorstrapi.herokuapp.com/combos/${comboPut}`,
        {
          name: name,
          description: description,
          price: price,
          products: selectProduct,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then(
        (res) => alert(`${updatedName} se actualizo con exito!`),
        (window.location = '/admin')
      )
      .catch((err) => alert('hubo un problema actualizando el combo' + err));
  };

  return (
    <div className='col-12 px-5 my-3'>
      <h1>ACTUALIZAR COMBO</h1>
      <FormGroup>
        <Form.Control
          className='mb-3'
          onChange={handleChange}
          as='select'
          required
          defaultValue='default'
        >
          <option key={1} disabled value='default'>
            Elegir combo a Actualizar
          </option>
          ;
          {combo &&
            combo.map((data) => {
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

        <div className='mb-3'>
          {products &&
            products.map((data, i) => {
              return (
                <Form.Check
                  key={data.id}
                  onChange={handleProductChange}
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
      <p className='label text-danger mt-2'>
        *IMPORTANTE: Es necesario completar TODOS los campos en esta seccion de
        lo contrario se borrrarán los datos que no se completen. Es decir, en el
        caso de querer actualizar el nombre solamente, se escribirá en la
        casilla de "nombre" el nuevo nombre y en las demas casillas se escribirá
        la misma informacion que posee en el momento
      </p>
    </div>
  );
}
