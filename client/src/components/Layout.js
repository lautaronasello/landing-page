import React from 'react';
import Navigate from './navigate.js';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navigate />
      {children}
    </React.Fragment>
  );
}

export default Layout;
