import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import FilterLabel from './FilterLabel';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import SliderRange from './Slider';

// TODO

// Skeletons for the filters
// Figure out how to reset the range sliders
// Add empty state when there's no car which meets the filters criteria
// Adjust font sizes
// Adjust monthly payment on the inventory page for the carInventory card
// Fixed filter scrolling on the desktop view
// Add button to scroll to top at the bottom of inventory
// Fix grid size for the inventory page on desktop view (max 1040)

// Figure out how to animate components on state change

function Filters() {
  const [{ showFilters, minMaxPrice, minMaxMileage }, dispatch] =
    useStateValue();

  const [clearAllFilters, setClearAllFilters] = useState(false);
  const [windowWidth, setWindowWidth] = useState(false);
  const navigate = useNavigate();

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
        setYearsFilterOptions([...new Set(years.sort())]);
        setWheelsFilterOptions([...new Set(wheels.sort())]);
        setColorsFilterOptions([...new Set(colors)]);
      });
  }, []);

  // Opening filters by default if window is in the desktop view
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth >= 990) {
      dispatch({
        type: 'TOGGLE_FILTERS',
        showFilters: true,
      });
    }
  }, []);

  // Hides the filter component
  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  // Clears all filters
  const clearFilters = () => {
    setClearAllFilters(true);
    // Resets the values for the minmax price and mileage
    navigate(
      `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
    );

    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        {windowWidth < 990 && <h2>Filters</h2>}
        {windowWidth < 990 && (
          <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
        )}
      </div>

      <Button
        onClick={clearFilters}
        className={`filters_button ${
          windowWidth >= 990 && 'filters_button-desktop'
        }`}
        text={'Clear All'}
        bgColor='green'
      />

      <div className='filters_divider'></div>

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

        <section>
          <h5>Price</h5>

          <form className='filters_checkboxes'>
            <SliderRange range={minMaxPrice} price text='price' />
          </form>
        </section>

        <section>
          <h5>Mileage</h5>

          <form className='filters_checkboxes'>
            <SliderRange range={minMaxMileage} text='mileage' />
          </form>
        </section>
      </div>
    </section>
  );
}

export default Filters;
