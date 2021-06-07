import React, { useState } from 'react';
import AdminDeleteCombos from './AdminDeleteCombo';
import AdminPostCombo from './AdminPostCombo';
import AdminPutCombo from './AdminPutCombo';

export default function ComboAdmin({ jwt, combo, products }) {
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
    <div className='col-12 py-3'>
      <div className='my-3'>
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

      {action === 'PUT' && (
        <AdminPutCombo combo={combo} products={products} jwt={jwt} />
      )}
      {action === 'POST' && <AdminPostCombo products={products} jwt={jwt} />}
      {action === 'DELETE' && <AdminDeleteCombos combo={combo} jwt={jwt} />}
    </div>
  );
}
