import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';

export default function AdminDeleteCombos({ combo, jwt }) {
  const [deleteCombo, setDeleteCombo] = useState();
  const [deleteName, setDeleteName] = useState();
  function handleChange(e) {
    let value = e.target.value;
    setDeleteCombo(value);
    setDeleteName(e.target.selectedOptions[0].id);
    console.log(e);
  }

  var handleSubmit = async () => {
    var confirm = window.confirm(`ESTAS SEGURA DE ELMINAR ${deleteName}`);
    if (confirm) {
      await axios
        .delete(
          `https://menoscaosporfavorstrapi.herokuapp.com/combos/${deleteCombo}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        .then((res) => {
          alert(`Se elimino ${deleteName}`);
          window.location = '/admin';
        })
        .catch((err) => alert(err));
    } else {
      alert('no se elimino el producto');
    }
  };

  return (
    <div className='col-12 px-5 mt-3'>
      <h1>ELIMINAR COMBO</h1>
      <FormGroup>
        <Form.Control
          className='mb-3'
          onChange={handleChange}
          as='select'
          required
          defaultValue='default'
        >
          <option disabled value='default'>
            Elegir combo a eliminar
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
        <input
          type='submit'
          className='btn btn-danger'
          value='ELIMINAR'
          onClick={handleSubmit}
        />
      </FormGroup>
    </div>
  );
}
