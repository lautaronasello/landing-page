import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';

export default function CartButton({ products, combo }) {
  return (
    <DropdownButton
      variant='light'
      className='py-1 ms-3'
      menuAlign='right'
      title={
        <FontAwesomeIcon
          className='d-inline-block align-top'
          style={{ width: '20', height: '20' }}
          icon={faShoppingCart}
        />
      }
      id='dropdown-menu-align-responsive-2'
    >
      <div style={{ minWidth: '600px' }}>
        <ShoppingCart products={products} combo={combo} />
      </div>
    </DropdownButton>
  );
}
