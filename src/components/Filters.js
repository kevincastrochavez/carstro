import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Button from '../components/Button';
import { useState } from 'react';

function Filters({ hideFilters }) {
  const [closeFilters, setCloseFilters] = useState(true);
  console.log(closeFilters);

  const handleCloseFilters = () => setCloseFilters(!closeFilters);

  return (
    <section className={`filters ${hideFilters && 'filters_hidden'}`}>
      <div className='filters_top'>
        <h2>Filters</h2>
        <CloseIcon onClick={handleCloseFilters} />
      </div>

      <Button className='filters_button' text={'Clear All'} bgColor='green' />

      <div className='filters_container'>Container</div>
    </section>
  );
}

export default Filters;
