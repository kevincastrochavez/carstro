import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default CarDetails;
