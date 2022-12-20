import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Button from '../components/Button';
import { useStateValue } from '../StateProvider';

function Filters() {
  const [{ showFilters }, dispatch] = useStateValue();

  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        <h2>Filters</h2>
        <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
      </div>

      <Button className='filters_button' text={'Clear All'} bgColor='green' />

      <form className='filters_form'>
        <section>
          <h5>Brand</h5>

          <div className='filters_checkboxes'>
            <div className='filters_checkbox'>
              <input type='checkbox' id='kia' name='brands' value='kia' />
              <label for='kia'>Kia</label>
            </div>
            <div className='filters_checkbox'>
              <input type='checkbox' id='bmw' name='brands' value='bmw' />
              <label for='bmw'>BMW</label>
            </div>
            <div className='filters_checkbox'>
              <input type='checkbox' id='audi' name='brands' value='audi' />
              <label for='audi'>audi</label>
            </div>
          </div>
        </section>

        <section>
          <h5>Model Year</h5>

          <div className='filters_checkboxes'>
            <div className='filters_checkbox'>
              <input type='checkbox' id='2010' name='brands' value='2010' />
              <label for='2010'>2010</label>
            </div>
            <div className='filters_checkbox'>
              <input type='checkbox' id='2011' name='brands' value='2011' />
              <label for='2011'>2011</label>
            </div>
            <div className='filters_checkbox'>
              <input type='checkbox' id='2012' name='brands' value='2012' />
              <label for='2012'>2012</label>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}

export default Filters;
