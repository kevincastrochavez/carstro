import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import CurrencyFormat from 'react-currency-format';

import { useStateValue } from '../StateProvider';

function SliderRange({ range, text, price }) {
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();
  const [value, setValue] = useState(range);

  const minPrice = range[0];
  const maxPrice = range[1];

  console.log(minMaxPrice);
  console.log(minMaxMileage);

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [range]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = (event, newValue) => {
    if (price) {
      dispatch({
        type: 'SET_MIN_MAX_PRICE_FILTER',
        minMaxPrice: newValue,
      });
    } else {
      dispatch({
        type: 'SET_MIN_MAX_MILEAGE_FILTER',
        minMaxMileage: newValue,
      });
    }
  };

  return (
    <div className='slider'>
      <div className='slider_minMax'>
        <span>
          {
            <CurrencyFormat
              value={value[0]}
              displayType={'text'}
              thousandSeparator={true}
              prefix={price ? '$' : null}
              suffix={!price ? ' miles' : null}
            />
          }
        </span>
        <span>
          {
            <CurrencyFormat
              value={value[1]}
              displayType={'text'}
              thousandSeparator={true}
              prefix={price ? '$' : null}
              suffix={!price ? ' miles' : null}
            />
          }
        </span>
      </div>
      <Slider
        aria-label={`Car ${text} range`}
        getAriaLabel={() => `Car ${text} range`}
        value={value}
        min={minPrice}
        max={maxPrice}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        valueLabelDisplay='off'
        disableSwap
        name={`${text}Range`}
      />
    </div>
  );
}

export default SliderRange;
