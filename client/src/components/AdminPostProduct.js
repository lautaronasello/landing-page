import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Form } from 'react-bootstrap';

export default function AdminPostProduct({ combo, jwt }) {
  const [name, setName] = useState('Ultimo producto');
  const [description, setDescription] = useState(
    'Producto nuevo de menos caos por favor'
  );
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [uploadImage, setUploadImage] = useState();
  const [productImage, setProductImage] = useState();

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

  var removeItemFromArr = (arr, item) => {
    var i = arr.indexOf(item);
    i !== -1 && arr.splice(i, 1);
  };

  let selectCombo = [];

  function handleComboChange(e) {
    var checked = e.target.checked;
    let value = e.target.name;
    if (checked) {
      selectCombo.push(value);
    } else {
      removeItemFromArr(selectCombo, value);
    }
    console.log(selectCombo, 'checked: ', checked, ', value: ', value);
  }

  function handleStockChange(e) {
    let value = e.target.value;
    setStock(value);
  }

  function handleImgChange(e) {
    var file = e.target.files[0];
    setUploadImage(file);
  }

  var handleUploadImg = async () => {
    const formData = new FormData();
    formData.append('files', uploadImage);

    await axios
      .post('http://localhost:1337/upload', formData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        alert('La imagen se subio bien, ahora podes subir el producto :)');
        setProductImage(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var handleSubmit = async () => {
    await axios
      .post(
        'http://localhost:1337/products/',
        {
          name: name,
          description: description,
          price: price,
          stock: stock,
          combos: selectCombo,
          image: productImage,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((res) => {
        alert('Se subieron los datos');
        // window.location = '/admin';
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='col-12 px-5 mt-3 pb-3'>
      <h1>AGREGAR PRODUCTO NUEVO</h1>
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
        <Form.Group className='text-left'>
          <Form.File
            className='d-inline-block'
            onChange={handleImgChange}
            id='exampleFormControlFile1'
          />
          <button
            className='btn btn-outline-dark btn-sm mx-3'
            onClick={handleUploadImg}
          >
            subir
          </button>
        </Form.Group>
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
      <input
        type='reset'
        value='Agregar Producto'
        className='btn btn-outline-dark mt-3'
        onClick={handleSubmit}
      />
    </div>
  );
}
