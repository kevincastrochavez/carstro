import React from 'react';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

import Button from './Button';

function CarInventory({
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
  activeGrid,
  carId,
}) {
  const [carInventoryOpen, setCarInventoryOpen] = useState(false);
  const brandWordsQuantity = brand.split(' ').length;
  const monthlyCost = Math.ceil(price / 6 / 12);

  return (
    <div
      onClick={() => setCarInventoryOpen(!carInventoryOpen)}
      className={`carInventory ${!activeGrid && 'carInventory_listView'}`}
    >
      <section className='carInventory_top'>
        <h4>
          {year} {brand} {brandWordsQuantity < 2 && model}
        </h4>
        <span className='carInventory_top-right'>
          {
            <CurrencyFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          }
        </span>
        <p>{odometer} mile odometer</p>
        <p className='carInventory_top-right'>
          {
            <CurrencyFormat
              value={monthlyCost}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          }
          /mo
        </p>
        <p>{tireSize}" wheels</p>
      </section>

      <div className='carInventory_img'>
        <img
          src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${vin}.png`}
          alt={`${year} ${brand} ${model} car`}
        />
      </div>

      {(activeGrid || carInventoryOpen) && (
        <div className='carInventory_bottomContainer'>
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
                <b>{mpg.split('/')[1]}</b>mpg
              </p>
              <span>Range</span>
            </div>
          </div>

          <Link to={carId} className='carInventory_link'>
            <Button text='View Details' bgColor='green' />
          </Link>
        </div>
      )}
    </div>
  );
}

export default CarInventory;
