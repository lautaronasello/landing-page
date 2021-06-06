import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';

export default function AdminDeleteProduct({ products, jwt }) {
  const [deleteProduct, setDeleteProduct] = useState();
  const [deleteName, setDeleteName] = useState();
  function handleChange(e) {
    let value = e.target.value;
    setDeleteProduct(value);
    setDeleteName(e.target.selectedOptions[0].id);
    console.log(e);
  }

  var handleSubmit = async () => {
    var confirm = window.confirm(`ESTAS SEGURA DE ELMINAR ${deleteName}`);
    if (confirm) {
      await axios
        .delete(`http://localhost:1337/products/${deleteProduct}`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          alert('se elimino insta');
          window.location = '/admin';
        })
        .catch((err) => alert(err));
    } else {
      alert('no se elimino el producto');
    }
  };

  return (
    <div className='col-12 px-5 mt-3'>
      <h1>Eliminar Producto</h1>
      <FormGroup>
        <Form.Control
          className='mb-3'
          onChange={handleChange}
          as='select'
          required
          defaultValue='default'
        >
          <option disabled value='default'>
            Elegir producto a eliminar
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
        <input type='submit' value='Eliminar' onClick={handleSubmit} />
      </FormGroup>
    </div>
  );
}
