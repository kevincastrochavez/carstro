import React from 'react';
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

      <div className='filters_container'>Container</div>
    </section>
  );
}

export default Filters;
