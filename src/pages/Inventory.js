import React from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import Button from '../components/Button';

function Inventory() {
  return (
    <main className='inventory_main'>
      <div className='inventory_header'>
        <div className='inventory_header-top'>
          <h1>Inventory</h1>

          <div className='inventory_viewIcons'>
            <ViewModuleIcon />
            <div></div>
            <ViewListIcon />
          </div>
        </div>

        <div className='inventory_header-bottom'>
          <Button text='Filter' />
          <Button text='Price: Low' />
        </div>
      </div>
    </main>
  );
}

export default Inventory;
