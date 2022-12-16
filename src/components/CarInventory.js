import React from 'react';

import Button from './Button';

function CarInventory({
  className,
  year,
  brand,
  model,
  price,
  odometer,
  tireSize,
  vin,
  acceleration,
  topSpeed,
  mpg,
}) {
  return (
    <div className={`carInventory ${className}`}>
      <section className='carInventory_top'>
        <h4>
          {year} {brand} {model}
        </h4>
        <span className='carInventory_top-right'>${price}</span>
        <p>{odometer} mile odometer</p>
        <p className='carInventory_top-right'>$755/mo</p>
        <p>{tireSize}" wheels</p>
      </section>

      <div className='carInventory_img'>
        <img
          src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${vin}.png`}
          alt={`${year} ${brand} ${model} car`}
        />
      </div>

      <div className='carInventory_features'>
        <div className='carInventory_features-feature'>
          <p>
            <b>{acceleration}</b>s
          </p>
          <span>0-60mph</span>
        </div>
        <div className='carInventory_features-divider'></div>
        <div className='carInventory_features-feature'>
          <p>
            <b>{topSpeed}</b>mph
          </p>
          <span>Top Speed</span>
        </div>
        <div className='carInventory_features-divider'></div>
        <div className='carInventory_features-feature'>
          <p>
            <b>{mpg}</b>mpg
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
