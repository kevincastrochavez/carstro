import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import CurrencyFormat from 'react-currency-format';

function SliderRange({ priceRange }) {
  const [value, setValue] = useState(priceRange);

  const minPrice = priceRange[0];
  const maxPrice = priceRange[1];

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [priceRange]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              prefix={'$'}
            />
          }
        </span>
        <span>
          {
            <CurrencyFormat
              value={value[1]}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          }
        </span>
      </div>
      <Slider
        aria-label='Car price range'
        getAriaLabel={() => 'Car price range'}
        value={value}
        min={minPrice}
        max={maxPrice}
        onChange={handleChange}
        valueLabelDisplay='off'
        disableSwap
        name='priceRange'
      />
    </div>
  );
}

export default SliderRange;
