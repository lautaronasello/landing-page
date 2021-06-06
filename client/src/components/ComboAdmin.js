import React, { useState } from 'react';
import AdminDeleteProduct from './AdminDeleteProduct';
import AdminPostProduct from './AdminPostProduct';
import AdminPutProduct from './AdminPutProduct';

export default function ComboAdmin({}) {
  const [action, setAction] = useState('PUT');
  function handleRefresh() {
    setAction('PUT');
  }

  function handleAdd() {
    setAction('POST');
  }

  function handleDelete() {
    setAction('DELETE');
  }

  return (
    <div className='col-12 pt-4'>
      <button className='btn btn-outline-dark me-3' onClick={handleRefresh}>
        Actualizar Combo
      </button>
      <button className='btn btn-outline-dark me-3' onClick={handleAdd}>
        Agregar Combo
      </button>
      <button className='btn btn-outline-dark me-3' onClick={handleDelete}>
        Eliminar Combo
      </button>
    </div>
  );
}
