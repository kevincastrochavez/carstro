import React, { useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import Button from '../components/Button';
import CarInventory from '../components/CarInventory';

function Inventory() {
  const [activeGrid, setActiveGrid] = useState(true);

  return (
    <main className='inventory_main'>
      <div className='inventory_header'>
        <div className='inventory_header-top'>
          <h1>Inventory</h1>

          <div className='inventory_viewIcons'>
            <ViewModuleIcon id={activeGrid && 'activeLayout'} />
            <div></div>
            <ViewListIcon id={!activeGrid && 'inactiveLayout'} />
          </div>
        </div>

        <div className='inventory_header-bottom'>
          <Button text='Filter' bgColor='grey' />
          <Button text='Price: Low' bgColor='grey' />
        </div>
      </div>
      <div className='inventory_hiddenBar'></div>
      <div className='inventory_carsContainer'>
        <CarInventory />
        <CarInventory />
        <CarInventory />
        <CarInventory />
      </div>
    </main>
  );
}

export default Inventory;
