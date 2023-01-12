import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Hamburger from './Hamburger';

function Header() {
  const [headerClass, setHeaderClass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.location.href === 'https://carstro-15495.web.app/' ||
      window.location.href === 'https://carstro-15495.web.app/aboutUs' ||
      window.location.href === 'https://carstro-15495.web.app/marketing'
    ) {
      setHeaderClass('');
    } else {
      setHeaderClass('headerWhite');
    }
  }, [window.location.href]);

  return (
    <div className='header'>
      <div className={`headerHeader ${headerClass}`}>
        <div className='leftSide'>
          <Link to='/'>
            <img className='header-logo' src='headerImages/logo.png' alt='' />
          </Link>
        </div>
        <div className='rightSide'>
          <div className='links' id='showLinks'>
            <div className='dropdown'>
              <button
                className='dropbtn'
                onClick={() => {
                  navigate('/');
                }}
              >
                Homepage
              </button>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <button
                className='dropbtn'
                onClick={() => {
                  navigate(
                    '/inventory?minPrice=23499&maxPrice=420000&minMileage=1300&maxMileage=240483'
                  );
                }}
              >
                Inventory
              </button>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <button
                className='dropbtn'
                onClick={() => {
                  navigate('/salesrepresentatives');
                }}
              >
                Sales Representatives
              </button>
              <div className='dropdown_content'></div>
            </div>
            <div className='dropdown'>
              <button
                className='signOut'
                id='dropbtn'
                onClick={() => {
                  navigate('/aboutus');
                }}
              >
                About Us
              </button>
              <div className='dropdown_content'></div>
            </div>
          </div>

          <div className='hamWrapper'>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
