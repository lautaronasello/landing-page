import React from 'react';
import { Col } from 'react-bootstrap';

export default function InfoCard({ title, subtitle, style, color }) {
  const letra = {
    color: color,
  };

  return (
    <Col className='rounded p-3' md={12} style={style}>
      <h3>{title}</h3>
      <p className='lead' style={letra}>
        {subtitle}
      </p>
    </Col>
  );
}
