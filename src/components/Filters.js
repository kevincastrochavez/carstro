import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import FilterLabel from './FilterLabel';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

function Filters() {
  const [{ showFilters }, dispatch] = useStateValue();

  const [isChecked, setIsChecked] = useState(false);
  const [clearAllFilters, setClearAllFilters] = useState(false);

  const [brandFilterOptions, setBrandFilterOptions] = useState([]);
  const [yearsFilterOptions, setYearsFilterOptions] = useState([]);
  const [wheelsFilterOptions, setWheelsFilterOptions] = useState([]);
  const [colorsFilterOptions, setColorsFilterOptions] = useState([]);
  const [filtersInfo, setFiltersInfo] = useState({
    brands: [],
    years: [],
    wheels: [],
    colors: [],
  });

  console.log(filtersInfo);

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

  // In charge of resetting all the checkboxes when the Clear All button is pressed
  useEffect(() => {
    if (clearAllFilters) {
      setFiltersInfo({
        brands: [],
        years: [],
        wheels: [],
        colors: [],
      });

      setClearAllFilters(false);
    }
  }, [clearAllFilters]);

  // Hides the filter component
  const hideFilters = () => {
    dispatch({
      type: 'TOGGLE_FILTERS',
      showFilters: false,
    });
  };

  // These handle functions keep track of which checkboxes are checked across the several forms for the different fields
  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    const { brands, years, wheels, colors } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        brands: [...brands, value],
        years: [...years],
        wheels: [...wheels],
        colors: [...colors],
      });
    } else {
      setFiltersInfo({
        brands: brands.filter((e) => e !== value),
        years: years,
        wheels: wheels,
        colors: colors,
      });
    }
  };

  const handleYearChange = (e) => {
    const { value, checked } = e.target;
    const { brands, years, wheels, colors } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        years: [...years, value],
        brands: [...brands],
        wheels: [...wheels],
        colors: [...colors],
      });
    } else {
      setFiltersInfo({
        years: years.filter((e) => e !== value),
        brands: brands,
        wheels: wheels,
        colors: colors,
      });
    }
  };

  const handleWheelChange = (e) => {
    const { value, checked } = e.target;
    const { years, brands, wheels, colors } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        wheels: [...wheels, value],
        brands: [...brands],
        years: [...years],
        colors: [...colors],
      });
    } else {
      setFiltersInfo({
        wheels: wheels.filter((e) => e !== value),
        brands: brands,
        years: years,
        colors: colors,
      });
    }
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    const { years, brands, wheels, colors } = filtersInfo;

    if (checked) {
      setFiltersInfo({
        colors: [...colors, value],
        brands: [...brands],
        years: [...years],
        wheels: [...wheels],
      });
    } else {
      setFiltersInfo({
        colors: colors.filter((e) => e !== value),
        brands: brands,
        years: years,
        wheels: wheels,
      });
    }
  };

  return (
    <section className={`filters ${!showFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        <h2>Filters</h2>
        <CloseIcon className='filters_closeBtn' onClick={hideFilters} />
      </div>

      <Button
        onClick={() => setClearAllFilters(true)}
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
                <div className='filters_checkbox'>
                  <Checkbox
                    id={brand}
                    name='brands'
                    value={brand}
                    checked={isChecked}
                    onChange={handleBrandChange}
                    clearAll={clearAllFilters}
                    onClick={() => setIsChecked(!isChecked)}
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
                <div className='filters_checkbox'>
                  <Checkbox
                    id={year}
                    name='years'
                    value={year}
                    checked={isChecked}
                    onChange={handleYearChange}
                    clearAll={clearAllFilters}
                    onClick={() => setIsChecked(!isChecked)}
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
                <div className='filters_checkbox'>
                  <Checkbox
                    id={wheel}
                    name='wheels'
                    value={wheel}
                    checked={isChecked}
                    onChange={handleWheelChange}
                    clearAll={clearAllFilters}
                    onClick={() => setIsChecked(!isChecked)}
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
                <div className='filters_checkbox'>
                  <Checkbox
                    id={color}
                    name='colors'
                    value={color}
                    checked={isChecked}
                    onChange={handleColorChange}
                    clearAll={clearAllFilters}
                    onClick={() => setIsChecked(!isChecked)}
                    hidden
                  />
                  <FilterLabel option={color} colors={true} />
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
