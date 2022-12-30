import React, { useEffect, useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useSearchParams, useLocation } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import Button from '../components/Button';
import CarInventory from '../components/CarInventory';
import Filters from '../components/Filters';
import db from '../firebase';

function Inventory() {
  const [
    {
      carsResults,
      showFilters,
      brandsFilters,
      modelYearsFilters,
      tireSize,
      colors,
      minMaxPrice,
      minMaxMileage,
    },
    dispatch,
  ] = useStateValue();
  const [activeGrid, setActiveGrid] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const [carsToRender, setCarsToRender] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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

  // Fetching data from database if user access website directly through this page
  useEffect(() => {
    if (carsResults.length === 0) {
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

          dispatch({
            type: 'SET_CARS_RESULTS',
            carsResults,
          });

          // Setting the min and max for the price and mileage
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

  console.log(searchParams.get('minPrice') ?? minMaxPrice[0]);

  useEffect(() => {
    // Performs the final filtering before rendering the CarInventory component
    const filteredCars = carsResults.filter((car) => {
      return (
        (brandsFilters.length > 0 ? brandsFilters.includes(car.brand) : car) &&
        (modelYearsFilters.length > 0
          ? modelYearsFilters.includes(car.year)
          : car) &&
        (tireSize.length > 0 ? tireSize.includes(car.tireSize) : car) &&
        (colors.length > 0 ? colors.includes(car.color) : car) &&
        Number(car.price) >= (searchParams.get('minPrice') ?? minMaxPrice[0]) &&
        (Number(car.price) <= searchParams.get('maxPrice') ?? minMaxPrice[1]) &&
        (Number(car.odometer) >= searchParams.get('minMileage') ??
          minMaxMileage[0]) &&
        (Number(car.odometer) <= searchParams.get('maxMileage') ??
          minMaxMileage[1])
      );
    });

    console.log(filteredCars);

    setCarsToRender(filteredCars);
  }, [brandsFilters, modelYearsFilters, tireSize, colors, location]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showFilters]);

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
      <div
        className={`inventory_carsContainer ${
          !activeGrid && 'inventory_carsContainer-reducedGap'
        }`}
      >
        {carsToRender?.map((car) => {
          return (
            <CarInventory
              carId={car.cardId}
              key={car.cardId}
              {...car}
              activeGrid={activeGrid}
              windowSize={windowWidth}
            />
          );
        })}
      </div>

      <Filters />
    </main>
  );
}

export default Inventory;
