import React, { useEffect, useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import Button from '../components/Button';
import CarInventory from '../components/CarInventory';
import db from '../firebase';

function Inventory() {
  const [activeGrid, setActiveGrid] = useState(true);
  const [carsArray, setCarsArray] = useState([]);

  const showListLayout = () => setActiveGrid(false);
  const showGridLayout = () => setActiveGrid(true);

  useEffect(() => {
    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return car.data();
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
          <Button text='Filter' bgColor='grey' />
          <Button text='Price: Low' bgColor='grey' />
        </div>
      </div>
      <div className='inventory_hiddenBar'></div>
      <div className='inventory_carsContainer'>
        {carsArray.map((car, index) => {
          return (
            <CarInventory key={car.vin} {...car} activeGrid={activeGrid} />
          );
        })}
      </div>
    </main>
  );
}

export default Inventory;
