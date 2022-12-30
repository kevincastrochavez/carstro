import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import CurrencyFormat from 'react-currency-format';
import { createSearchParams, useSearchParams } from 'react-router-dom';

import { useStateValue } from '../StateProvider';

function SliderRange({ range, text, price }) {
  const [{ minMaxPrice, minMaxMileage }] = useStateValue();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(range);

  const minPrice = range[0];
  const maxPrice = range[1];

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [range]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = (event, newValue) => {
    if (price) {
      setSearchParams(
        createSearchParams({
          minPrice: newValue[0],
          maxPrice: newValue[1],
          minMileage: searchParams.get('minMileage') ?? minMaxMileage[0],
          maxMileage: searchParams.get('maxMileage') ?? minMaxMileage[1],
        })
      );
    } else {
      setSearchParams(
        createSearchParams({
          minPrice: searchParams.get('minPrice') ?? minMaxPrice[0],
          maxPrice: searchParams.get('maxPrice') ?? minMaxPrice[1],
          minMileage: newValue[0],
          maxMileage: newValue[1],
        })
      );
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
