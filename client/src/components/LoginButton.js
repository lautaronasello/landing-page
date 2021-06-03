import React from 'react';

export default function LoginButton({ handleAuth }) {
  return (
    <button
      className='btn btn-light btn-sm border my-auto '
      onClick={handleAuth}
    >
      Login/Registrarse
    </button>
  );
}
