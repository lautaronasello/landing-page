import React, { useState } from 'react';
import AdminDeleteProduct from './AdminDeleteProduct';
import AdminPostProduct from './AdminPostProduct';
import AdminPutProduct from './AdminPutProduct';

export default function ProductAdmin({ products, combo }) {
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
        Actualizar Producto
      </button>
      <button className='btn btn-outline-dark me-3' onClick={handleAdd}>
        Agregar Product
      </button>
      <button className='btn btn-outline-dark me-3' onClick={handleDelete}>
        Eliminar Producto
      </button>
      {action === 'PUT' && <AdminPutProduct />}
      {action === 'DELETE' && <AdminDeleteProduct />}
      {action === 'POST' && <AdminPostProduct combo={combo} />}
    </div>
  );
}
