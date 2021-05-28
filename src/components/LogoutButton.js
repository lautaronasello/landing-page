import React from 'react';

export const LogoutButton = ({ user, handleLogout }) => {
  return (
    <>
      <h5 className='fs-6 d-inline-block me-4 '>Hola {user.displayName}!</h5>
      <button className='btn btn-light border me-2' onClick={handleLogout}>
        <p className='m-0 p-0'>Logout</p>
      </button>
    </>
  );
};
