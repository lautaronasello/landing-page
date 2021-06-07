import React, { useState } from 'react';
import AdminDeleteProduct from './AdminDeleteProduct';
import AdminPostProduct from './AdminPostProduct';
import AdminPutProduct from './AdminPutProduct';

export default function ProductAdmin({ products, combo, jwt }) {
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
          Actualizar Producto
        </button>
        <button className='btn btn-outline-dark me-3' onClick={handleAdd}>
          Agregar Product
        </button>
        <button className='btn btn-outline-dark me-3' onClick={handleDelete}>
          Eliminar Producto
        </button>
      </div>
      {action === 'PUT' && (
        <AdminPutProduct combo={combo} jwt={jwt} products={products} />
      )}
      {action === 'DELETE' && (
        <AdminDeleteProduct jwt={jwt} products={products} />
      )}
      {action === 'POST' && <AdminPostProduct jwt={jwt} combo={combo} />}
    </div>
  );
}
