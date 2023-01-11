import React, { useState } from 'react';
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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
          {' '}
          <li className='nav-text'>
            <a href='/inventory' className='nav-text-a'>
              Inventory
            </a>
          </li>
          <li className='nav-text'>
            <a href='/salesrepresentatives' className='nav-text-a'>
              Sales Representatives
            </a>
          </li>
          <li className='nav-text'>
            <a href='/aboutus' className='nav-text-a'>
              About Us
            </a>
          </li>
          <li className='nav-text'>
            <a href='/marketing' className='nav-text-a'>
              Marketing
            </a>
          </li>
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
