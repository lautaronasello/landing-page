import React from 'react';

export const LogoutButton = ({ user, handleLogout }) => {
  return (
    <>
      <p className='fs-6 d-inline-block me-4 my-auto '>
        Hola {user.displayName}!
      </p>
      <button className='btn btn-light btn-sm border' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
