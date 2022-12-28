// Cindy
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Homepage() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return { ...car.data(), carId: car.id };
        });

        const pricesArray = carsResults.map((car) => Number(car.price));
        const minPrice = Math.min(...pricesArray);
        const maxPrice = Math.max(...pricesArray);

        const milesArray = carsResults.map((car) => Number(car.odometer));
        const minMileage = Math.min(...milesArray);
        const maxMileage = Math.max(...milesArray);

        console.log(minMileage);
        console.log(maxMileage);

        dispatch({
          type: 'SET_CARS_RESULTS',
          carsResults,
        });

        dispatch({
          type: 'SET_MIN_MAX_PRICE_FILTER',
          minMaxPrice: [minPrice, maxPrice],
        });

        dispatch({
          type: 'SET_MIN_MAX_MILEAGE_FILTER',
          minMaxMileage: [minMileage, maxMileage],
        });
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to='/inventory'>Inventory</Link>
    </div>
  );
}

export default Homepage;
