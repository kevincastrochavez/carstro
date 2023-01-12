import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useStateValue } from '../StateProvider';

function Hamburger() {
  const [{ minMaxPrice, minMaxMileage }] = useStateValue();
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const goToPage = (navigateTo) => {
    setSidebar(false);
    navigate(navigateTo);
  };

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

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
        <ul className='nav-menu-items'>
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

          <div className='hamQuickLinks'>
            <li className='hamQuickLinksSingle'>
              <a href='#'>kia</a>
            </li>
            <li className='hamQuickLinksSingle'>
              <a href='#'>BMW</a>
            </li>
            <li className='hamQuickLinksSingle'>
              <a href='#'>General Motors</a>
            </li>
            <li className='hamQuickLinksSingle'>
              <a href='#'>Renault</a>
            </li>
            <li className='hamQuickLinksSingle'>
              <a href='#'>Audi</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;
