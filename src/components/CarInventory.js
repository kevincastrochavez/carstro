import React from 'react';

function CarInventory() {
  return (
    <div className='carInventory'>
      <section className='carInventory_top'>
        <h4>2016 Toyota Corolla</h4>
        <span className='carInventory_top-right'>$54,300</span>
        <p>33,239 mile odometer</p>
        <p className='carInventory_top-right'>$755/mo</p>
        <p>20" wheels</p>
      </section>
    </div>
  );
}

export default CarInventory;
