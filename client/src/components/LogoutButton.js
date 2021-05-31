import React from 'react';

export const LogoutButton = ({ user, handleLogout }) => {
  return (
    <>
      <p className='fs-6 d-inline-block me-4 '>Hola {user.displayName}!</p>
      <button
        className='btn btn-light btn-sm border me-2'
        onClick={handleLogout}
      >
        <p className='m-0 p-0'>Logout</p>
      </button>
    </>
  );
};
