import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import db from '../firebase';

function CarDetails() {
  const { id } = useParams();
  const [{ carsResults }] = useStateValue();

  let currentCar = carsResults.find((car) => car.carId === id);
  console.log(currentCar);

  useEffect(() => {
    // In case of browser refreshing, for now
    if (carsResults.length === 0) {
      db.collection('cars')
        .doc(id)
        .get()
        .then((car) => {
          currentCar = car.data();
        });
    }
  }, []);

  return <div>{id}</div>;
}

export default CarDetails;
