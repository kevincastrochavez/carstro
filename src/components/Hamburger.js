import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import "./hamburger.scss";

function Hamburger() {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className='navbar'>
        <a href='#' className='menu-bars'>
          <MenuIcon
            onClick={showSidebar}
            className='hamBarsIcon'
            styles='width: 100%; height: 40px;'
          />
        </a>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
        <ul className='nav-menu-items'>
          <Link to='/inventory' className='nav-text'>
            <p className='nav-text-a'>Inventory</p>

            <ArrowForwardIosIcon />
          </Link>

          <Link to='/salesrepresentatives' className='nav-text'>
            <p className='nav-text-a'>Sales Representatives</p>
            <ArrowForwardIosIcon />
          </Link>

          <Link to='/aboutUs' className='nav-text'>
            <p className='nav-text-a'>About Us</p>
            <ArrowForwardIosIcon />
          </Link>

          <Link to='/marketing' className='nav-text'>
            <p className='nav-text-a'>Marketing</p>
            <ArrowForwardIosIcon />
          </Link>
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
