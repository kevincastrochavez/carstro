import React, { useEffect, useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import Button from '../components/Button';
import CarInventory from '../components/CarInventory';
import Filters from '../components/Filters';
import db from '../firebase';

function Inventory() {
  const [activeGrid, setActiveGrid] = useState(true);
  const [carsArray, setCarsArray] = useState([]);
  const [hideFilters, setHideFilters] = useState(true);

  const showListLayout = () => setActiveGrid(false);
  const showGridLayout = () => setActiveGrid(true);
  const toggleFilters = () => setHideFilters(!hideFilters);

  useEffect(() => {
    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return { ...car.data(), cardId: car.id };
        });

        setCarsArray(carsResults);
      });
  }, []);

  return (
    <main className='inventory_main'>
      <div className='inventory_header'>
        <div className='inventory_header-top'>
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
        </div>

        <div className='inventory_header-bottom'>
          <Button onClick={toggleFilters} text='Filter' bgColor='grey' />
          <Button text='Price: Low' bgColor='grey' />
        </div>
      </div>
      <div className='inventory_hiddenBar'></div>
      <div className='inventory_carsContainer'>
        {carsArray.map((car) => {
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

      <Filters hideFilters={hideFilters} />
    </main>
  );
}

export default Inventory;
