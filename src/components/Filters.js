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

  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    const { brands, years } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        brands: [...brands, value],
        years: [...years],
      });
    } else {
      setFiltersInfo({
        brands: brands.filter((e) => e !== value),
        years: years,
      });
    }
  };

  const handleYearChange = (e) => {
    const { value, checked } = e.target;
    const { years, brands } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        years: [...years, value],
        brands: [...brands],
      });
    } else {
      setFiltersInfo({
        years: years.filter((e) => e !== value),
        brands: brands,
      });
    }
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        <h2>Filters</h2>
        <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
      </div>

      <Button className='filters_button' text={'Clear All'} bgColor='green' />

      <div className='filters_form'>
        <section>
          <h5>Brand</h5>

          <form className='filters_checkboxes'>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='kia'
                name='brands'
                value='kia'
                onChange={handleBrandChange}
              />
              <label htmlFor='kia'>Kia</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='bmw'
                name='brands'
                value='bmw'
                onChange={handleBrandChange}
              />
              <label htmlFor='bmw'>BMW</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='audi'
                name='brands'
                value='audi'
                onChange={handleBrandChange}
              />
              <label htmlFor='audi'>audi</label>
            </div>
          </form>
        </section>

        <section>
          <h5>Model Year</h5>

          <form className='filters_checkboxes'>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2010'
                name='brands'
                value='2010'
                onChange={handleYearChange}
              />
              <label htmlFor='2010'>2010</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2011'
                name='brands'
                value='2011'
                onChange={handleYearChange}
              />
              <label htmlFor='2011'>2011</label>
            </div>
            <div className='filters_checkbox'>
              <input
                type='checkbox'
                id='2012'
                name='brands'
                value='2012'
                onChange={handleYearChange}
              />
              <label htmlFor='2012'>2012</label>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Filters;
