import React, { useEffect, useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import { useStateValue } from '../StateProvider';
import Button from '../components/Button';
import CarInventory from '../components/CarInventory';
import Filters from '../components/Filters';
import db from '../firebase';

function Inventory() {
  const [{ carsResults, showFilters }, dispatch] = useStateValue();
  const [activeGrid, setActiveGrid] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  const showListLayout = () => setActiveGrid(false);
  const showGridLayout = () => setActiveGrid(true);

  const displayFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: true,
    });
  };

  const overlayClick = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  useEffect(() => {
    if (carsResults.length === 0) {
      db.collection('cars')
        .get()
        .then((cars) => {
          const carsResults = cars.docs.map((car) => {
            return { ...car.data(), cardId: car.id };
          });

          const pricesArray = carsResults.map((car) => Number(car.price));
          const minPrice = Math.min(...pricesArray);
          const maxPrice = Math.max(...pricesArray);

          const milesArray = carsResults.map((car) => Number(car.odometer));
          const minMileage = Math.min(...milesArray);
          const maxMileage = Math.max(...milesArray);

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
    }
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <main className='inventory_main'>
      {showFilters && windowWidth < 990 && (
        <div onClick={overlayClick} className='inventory_overlay'></div>
      )}
      <div className='inventory_header'>
        <h1>Inventory</h1>

        <div className='inventory_viewIcons'>
          <ViewModuleIcon
            id={activeGrid ? 'activeLayout' : undefined}
            onClick={showGridLayout}
          />
          <div></div>
          <ViewListIcon
            id={!activeGrid ? 'inactiveLayout' : undefined}
            onClick={showListLayout}
          />
        </div>

        <div className='inventory_header-bottom'>
          <Button
            className='inventory_filtersBtn'
            onClick={displayFilters}
            text='Filter'
            bgColor='grey'
          />
          <Button text='Price: Low' bgColor='grey' />
        </div>
      </div>
      <div className='inventory_hiddenBar'></div>
      <div className='inventory_carsContainer'>
        {carsResults?.map((car) => {
          return (
            <CarInventory
              carId={car.cardId}
              key={car.cardId}
              {...car}
              activeGrid={activeGrid}
            />
          );
        })}
      </div>

      <Filters />
    </main>
  );
}

export default Inventory;
