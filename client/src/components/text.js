import React from 'react';
import { Col } from 'react-bootstrap';

export default function Text(props) {
  const { titleText, secondaryText } = props;
  return (
    <div className='row'>
      <Col
        md={12}
        className='text-center p-3 shadow'
        style={{ background: '#fff' }}
      >
        <h4>{titleText} </h4>
        <p className='lead'>{secondaryText}</p>
      </Col>
    </div>
  );
}
