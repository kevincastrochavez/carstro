import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import FilterLabel from './FilterLabel';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

function Filters() {
  const [{ showFilters }, dispatch] = useStateValue();

  const [clearAllFilters, setClearAllFilters] = useState(false);

  const [brandFilterOptions, setBrandFilterOptions] = useState([]);
  const [yearsFilterOptions, setYearsFilterOptions] = useState([]);
  const [wheelsFilterOptions, setWheelsFilterOptions] = useState([]);
  const [colorsFilterOptions, setColorsFilterOptions] = useState([]);

  // Pulls data from db to populate unique filter options dynamically
  useEffect(() => {
    db.collection('cars')
      .get()
      .then((cars) => {
        const carsResults = cars.docs.map((car) => {
          return car.data();
        });

        let brands = [];
        let years = [];
        let wheels = [];
        let colors = [];

        carsResults.forEach((result) => {
          brands.push(result.brand);
          years.push(result.year);
          wheels.push(result.tireSize);
          colors.push(result.color);
        });

        setBrandFilterOptions([...new Set(brands)]);
        setYearsFilterOptions([...new Set(years)]);
        setWheelsFilterOptions([...new Set(wheels)]);
        setColorsFilterOptions([...new Set(colors)]);
      });
  }, []);

  // Hides the filter component
  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  const clearFilters = () => {
    setClearAllFilters(true);
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        <h2>Filters</h2>
        <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
      </div>

      <Button
        onClick={clearFilters}
        className='filters_button'
        text={'Clear All'}
        bgColor='green'
      />

      <div className='filters_form'>
        <section>
          <h5>Brand</h5>

          <form className='filters_checkboxes'>
            {brandFilterOptions.map((brand) => {
              return (
                <div key={brand} className='filters_checkbox'>
                  <Checkbox
                    id={brand}
                    name='brands'
                    value={brand}
                    clearAll={clearAllFilters}
                  />
                  <FilterLabel option={brand} text={brand} />
                </div>
              );
            })}
          </form>
        </section>

        <section>
          <h5>Model Year</h5>

          <form className='filters_checkboxes'>
            {yearsFilterOptions.map((year) => {
              return (
                <div key={year} className='filters_checkbox'>
                  <Checkbox
                    id={year}
                    name='years'
                    value={year}
                    clearAll={clearAllFilters}
                  />
                  <FilterLabel option={year} text={year} />
                </div>
              );
            })}
          </form>
        </section>

        <section>
          <h5>Wheels</h5>

          <form className='filters_checkboxes'>
            {wheelsFilterOptions.map((wheel) => {
              return (
                <div key={wheel} className='filters_checkbox'>
                  <Checkbox
                    id={wheel}
                    name='wheels'
                    value={wheel}
                    clearAll={clearAllFilters}
                  />

                  <FilterLabel option={wheel} text={`${wheel}" Wheels`} />
                </div>
              );
            })}
          </form>
        </section>

        <section>
          <h5>Color</h5>

          <form className='filters_checkboxes filters_colors'>
            {colorsFilterOptions.map((color) => {
              return (
                <div key={color} className='filters_checkbox'>
                  <Checkbox
                    id={color}
                    name='colors'
                    value={color}
                    clearAll={clearAllFilters}
                    hidden
                  />
                  <FilterLabel option={color} colorsProp={true} />
                </div>
              );
            })}
          </form>
        </section>
      </div>
    </section>
  );
}

export default Filters;
