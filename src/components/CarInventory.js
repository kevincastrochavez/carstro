import React from 'react';

import Button from './Button';

function CarInventory({ className }) {
  return (
    <div className={`carInventory ${className}`}>
      <section className='carInventory_top'>
        <h4>2016 Toyota Corolla</h4>
        <span className='carInventory_top-right'>$54,300</span>
        <p>33,239 mile odometer</p>
        <p className='carInventory_top-right'>$755/mo</p>
        <p>20" wheels</p>
      </section>

      <div className='carInventory_img'>
        <img
          src='https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/1FTEX14H0RKA51281.png'
          alt='Audi car'
        />
      </div>

      <div className='carInventory_features'>
        <div className='carInventory_features-feature'>
          <p>
            <b>5.5</b>s
          </p>
          <span>0-60mph</span>
        </div>
        <div className='carInventory_features-divider'></div>
        <div className='carInventory_features-feature'>
          <p>
            <b>140</b>mph
          </p>
          <span>Top Speed</span>
        </div>
        <div className='carInventory_features-divider'></div>
        <div className='carInventory_features-feature'>
          <p>
            <b>36</b>mpg
          </p>
          <span>Range</span>
        </div>
      </div>

      <Button
        className='carInventory_button'
        text='View Details'
        bgColor='green'
      />
    </div>
  );
}

export default CarInventory;
