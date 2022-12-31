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
  windowSize,
}) {
  const [carInventoryOpen, setCarInventoryOpen] = useState(false);

  const brandWordsQuantity = brand.split(' ').length;
  const downPayment = 5000;
  const principal = price - downPayment;
  const rate = 6.96 / 12 / 100;
  const termLength = 48;
  const monthlyCost =
    (principal * (rate * Math.pow(1 + rate, termLength))) /
    (Math.pow(1 + rate, termLength) - 1);

  /*
  !activeGrid && !carInventoryOpen && windowSize >= 990
  Elements with the conditions above will only render
  when the device is usually a desktop view, the user selected
  the list view to see the cars, and the carInventory card is closed
  */

  return (
    <div
      style={{
        maxHeight:
          activeGrid && windowSize >= 990
            ? '365.14px'
            : !activeGrid && !carInventoryOpen && windowSize >= 990
            ? '144px'
            : undefined,
      }}
      onClick={() => setCarInventoryOpen(!carInventoryOpen)}
      className={`carInventory ${!activeGrid && 'carInventory_listView'} ${
        !activeGrid &&
        !carInventoryOpen &&
        windowSize >= 990 &&
        'carInventory_listView-desktop'
      }`}
    >
      {!activeGrid && !carInventoryOpen && windowSize >= 990 && (
        <div className='carInventory_img-side'>
          <img
            src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${vin}.png`}
            alt={`${year} ${brand} ${model} car`}
          />
        </div>
      )}

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
        <p>
          {
            <CurrencyFormat
              value={odometer}
              displayType={'text'}
              thousandSeparator={true}
            />
          }{' '}
          mile odometer
        </p>
        <p className='carInventory_top-right'>
          {
            <CurrencyFormat
              value={monthlyCost.toFixed(0)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          }
          /mo
        </p>
        <p>{tireSize}" wheels</p>
        {!activeGrid && windowSize >= 990 && (
          <p className='carInventory_top-range'>
            {mpg.split('/')[1]} mpg range
          </p>
        )}
        {!activeGrid && windowSize >= 990 && (
          <p className='carInventory_top-speed'>{topSpeed} mph</p>
        )}
      </section>

      {!carInventoryOpen && !activeGrid && windowSize >= 990 ? null : (
        <div className='carInventory_img'>
          <img
            src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${vin}.png`}
            alt={`${year} ${brand} ${model} car`}
          />
        </div>
      )}

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
