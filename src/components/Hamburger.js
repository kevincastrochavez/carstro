import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useStateValue } from '../StateProvider';

function Hamburger({ white }) {
  const [{ minMaxPrice, minMaxMileage, brandsFilters }, dispatch] =
    useStateValue();
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const goToPage = (navigateTo) => {
    setSidebar(false);
    navigate(navigateTo);
  };

  // const filterByBrand = (brand) => {
  //   dispatch({
  //     type: 'SET_BRAND_FILTER',
  //     brandsFilters: brand,
  //   });

  //   setSidebar(false);

  //   navigate(
  //     `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
  //   );
  // };

  return (
    <div>
      <div className='navbar'>
        <div className='menu-bars'>
          <MenuIcon
            onClick={showSidebar}
            className='hamBarsIcon'
            styles='width: 100%; height: 40px;'
          />
        </div>
      </div>

      <nav
        className={sidebar ? 'nav-menu active' : 'nav-menu '}
        id={white ? 'navMenu_white' : ''}
      >
        <ul className='nav-menu-items'>
          <div className='nav-text' onClick={() => goToPage('/')}>
            <p className='nav-text-a'>Home</p>
            <ArrowForwardIosIcon />
          </div>
          <div
            className='nav-text'
            onClick={() =>
              goToPage(
                `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
              )
            }
          >
            <p className='nav-text-a'>Inventory</p>

            <ArrowForwardIosIcon />
          </div>

          <div
            className='nav-text'
            onClick={() => goToPage('/salesrepresentatives')}
          >
            <p className='nav-text-a'>Sales Representatives</p>
            <ArrowForwardIosIcon />
          </div>

          <div className='nav-text' onClick={() => goToPage('/aboutUs')}>
            <p className='nav-text-a'>About Us</p>
            <ArrowForwardIosIcon />
          </div>

          <div className='nav-text' onClick={() => goToPage('/marketing')}>
            <p className='nav-text-a'>Marketing</p>
            <ArrowForwardIosIcon />
          </div>

          {/* <div className='hamQuickLinks'>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Audi')}>Audi</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('BMW')}>BMW</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Lamborghini')}>Lamborghini</p>
            </li>
            <li className='hamQuickLinksSingle'>
              <p onClick={() => filterByBrand('Ferrari')}>Ferrari</p>
            </li>
          </div> */}
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;
