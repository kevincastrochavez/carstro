import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CurrencyFormat from 'react-currency-format';

import db from '../firebase';
import Button from '../components/Button';

function CarDetails() {
  const { id } = useParams();
  const [carDetailsInfo, setCarDetailsInfo] = useState({});

  useEffect(() => {
    db.collection('cars')
      .doc(id)
      .get()
      .then((car) => {
        setCarDetailsInfo(car.data());
      });
  }, []);

  return (
    <main className='carDetails'>
      <div className='carDetails_imgContainer'>
        <img
          src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carPictures/${carDetailsInfo?.vin}.png`}
          alt=''
        />
      </div>

      <div className='carDetails_info'>
        <Link to={'/inventory'} className='carDetails_linkBack'>
          <ArrowBackIosNewIcon /> Back to Inventory
        </Link>

        <div className='carDetails_features'>
          <div className='carDetails_features-heading'>
            <h1>
              {carDetailsInfo.year} {carDetailsInfo.brand}{' '}
              {carDetailsInfo.model}
            </h1>

            <div className='carDetails_features-numbers'>
              <span>
                {
                  <CurrencyFormat
                    value={carDetailsInfo.odometer}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                }{' '}
                mi
              </span>

              <div className='carDetails_features-divider'></div>

              <span>VIN {carDetailsInfo.vin}</span>
            </div>
          </div>

          <div className='carDetails_features-price'>
            <span className='carDetails_features-bigPrice'>
              <CurrencyFormat
                value={carDetailsInfo.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </span>

            <div className='carDetails_features-bigDivider'></div>

            <div className='carDetails_features-offer'>
              <p>Special Offer</p>
              <span>
                4.99% <span>APR</span>
              </span>
            </div>
          </div>

          <Button
            className={`carDetails_features-btn`}
            bgColor='green'
            text={'Contact Dealer'}
          />
        </div>
      </div>
    </main>
  );
}

export default CarDetails;
