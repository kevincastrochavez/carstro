import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SpeedIcon from '@mui/icons-material/Speed';
import CurrencyFormat from 'react-currency-format';

import db from '../firebase';
import Button from '../components/Button';
import GasStation from '../svg/GasStation';
import Engine from '../svg/Engine';
import Shift from '../svg/Shift';
import HeatedSeat from '../svg/HeatedSeat';
import Breaks from '../svg/Breaks';
import TopSpeed from '../svg/TopSpeed';
import LoanCalculator from './LoanCalculator';

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

          <Link className='carDetails_features-btn' to='/salesRepresentatives'>
            Contact Dealer
          </Link>
        </div>

        <div className='carDetails_iconsContainer'>
          <div className='carDetails_icon'>
            <GasStation />
            <p>{carDetailsInfo.mpg}</p>
            <p>est. MPG</p>
          </div>

          <div className='carDetails_icon'>
            <TopSpeed />
            <p>{carDetailsInfo.topSpeed}</p>
            <p>Top Speed</p>
          </div>

          <div className='carDetails_icon'>
            <Engine />
            <p>{carDetailsInfo.cylinders}</p>
            <p>Cylinders</p>
          </div>

          <div className='carDetails_icon'>
            <Shift />
            <p>{carDetailsInfo.transmission}</p>
          </div>

          <div className='carDetails_icon'>
            <HeatedSeat />
            <p>Heated Seats</p>
          </div>

          <div className='carDetails_icon'>
            <Breaks />
            <p>ABS Breaks</p>
          </div>
        </div>
      </div>

      <LoanCalculator
        className='carDetails_calculator'
        carInfo={carDetailsInfo}
      />
    </main>
  );
}

export default CarDetails;
