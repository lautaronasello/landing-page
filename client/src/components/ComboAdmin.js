import React, { useState } from 'react';

export default function ComboAdmin({ jwt, combo }) {
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
      {action === 'PUT' && 'this is the PUT'}
      {action === 'POST' && 'this is the POST'}
      {action === 'DELETE' && 'this is the PUT'}
    </div>
  );
}
