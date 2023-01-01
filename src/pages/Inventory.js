import React, { useEffect, useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useStateValue } from '../StateProvider';
import Button from '../components/Button';
import CarInventory from '../components/CarInventory';
import Filters from '../components/Filters';
import db from '../firebase';
import InventorySkeleton from '../components/InventorySkeleton';
import NoCarState from '../components/NoCarState';

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
  const [windowHeight, setWindowHeight] = useState(0);
  const [carsToRender, setCarsToRender] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loadingCars, setLoadingCars] = useState(false);
  const [offsetHeight, setOffsetHeight] = useState(0);
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
    setLoadingCars(true);

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

          setLoadingCars(false);
        });
    }
  }, []);

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
        Number(car.odometer) >=
          (searchParams.get('minMileage') ?? minMaxMileage[0]) &&
        Number(car.odometer) <=
          (searchParams.get('maxMileage') ?? minMaxMileage[1])
      );
    });

    setCarsToRender(filteredCars);
  }, [brandsFilters, modelYearsFilters, tireSize, colors, location]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight - 80);
  }, []);

  // Runs function that gets the scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fixes the scrolling when the filters are shown
  useEffect(() => {
    if (showFilters && window.innerWidth < 990) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showFilters]);

  const handleScroll = () => {
    setOffsetHeight(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        style={{
          justifyContent: !activeGrid && windowWidth >= 990 && 'unset',
          flexDirection: !activeGrid && windowWidth >= 990 && 'column',
        }}
        className={`inventory_carsContainer ${
          !activeGrid && 'inventory_carsContainer-reducedGap'
        }`}
      >
        {loadingCars ? (
          <InventorySkeleton />
        ) : carsToRender.length === 0 ? (
          <NoCarState />
        ) : (
          carsToRender?.map((car) => {
            return (
              <CarInventory
                carId={car.cardId}
                key={car.cardId}
                {...car}
                activeGrid={activeGrid}
                windowSize={windowWidth}
              />
            );
          })
        )}
      </div>

      <Filters />

      <Fab
        className='inventory_scrollToTop'
        size='small'
        aria-label='Scroll to top'
        style={{ top: windowHeight, opacity: offsetHeight >= 2000 ? 1 : 0 }}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </main>
  );
}

export default Inventory;
