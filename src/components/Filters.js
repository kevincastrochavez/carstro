import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Button from '../components/Button';
import { useStateValue } from '../StateProvider';

function Filters() {
  const [{ showFilters }, dispatch] = useStateValue();
  const [filtersInfo, setFiltersInfo] = useState({
    brands: [],
    years: [],
  });
  console.log(filtersInfo);

  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  const handleChange = (e, fieldArray) => {
    const { value, checked } = e.target;
    const field = filtersInfo[fieldArray];

    console.log(field);
    console.log(fieldArray);

    // if (checked) {
    //   setFiltersInfo({
    //     fieldArray: [...field, value],
    //   });
    // } else {
    //   setFiltersInfo({
    //     fieldArray: field.filter((e) => e !== value),
    //   });
    // }
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
              <input
                type='checkbox'
                id='kia'
                name='brands'
                value='kia'
                onChange={(e) => handleChange(e, 'brands')}
              />
              <label for='kia'>Kia</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='bmw'
                name='brands'
                value='bmw'
                onChange={(e) => handleChange(e, 'brands')}
              />
              <label for='bmw'>BMW</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='audi'
                name='brands'
                value='audi'
                onChange={(e) => handleChange(e, 'brands')}
              />
              <label for='audi'>audi</label>
            </div>
          </div>
        </section>

        <section>
          <h5>Model Year</h5>

          <div className='filters_checkboxes'>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2010'
                name='brands'
                value='2010'
                onChange={(e) => handleChange(e, 'years')}
              />
              <label for='2010'>2010</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2011'
                name='brands'
                value='2011'
                onChange={(e) => handleChange(e, 'years')}
              />
              <label for='2011'>2011</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2012'
                name='brands'
                value='2012'
                onChange={(e) => handleChange(e, 'years')}
              />
              <label for='2012'>2012</label>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}

export default Filters;
