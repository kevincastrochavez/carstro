import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import CurrencyFormat from 'react-currency-format';

function SliderRange() {
  const [value, setValue] = useState([10, 4000]);

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
        min={10}
        max={4000}
        onChange={handleChange}
        valueLabelDisplay='off'
        disableSwap
        name='priceRange'
      />
    </div>
  );
}

export default SliderRange;
