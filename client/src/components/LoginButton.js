import React from 'react';

export default function LoginButton({ handleAuth }) {
  return (
    <button className='btn btn-light border' onClick={handleAuth}>
      <p className='m-0 p-0'>Login/Registrarse</p>
    </button>
  );
}
