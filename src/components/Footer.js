// CINDY
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useStateValue } from '../StateProvider';

function Footer() {
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();
  const [currentYear, setCurrentYear] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const date = new Date().getFullYear();
    setCurrentYear(date);
  });

  return (
    <div className='footerContainer'>
      <div className='footerLogoBox'>
        <img
          className='footer-logo'
          src='footerImages/logoW.png'
          alt=''
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <div className='footerInfoBox'>
        <div className='footerInfoBoxSingle'>
          <div className='footerInfoBoxSingle-title'>Site Map</div>
          <div className='footerInfoBoxSingle-links'>
            <Link to={'/'} className='footerInfoBoxSingle-link'>
              Homepage
            </Link>
            <Link
              to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
              className='footerInfoBoxSingle-link'
              onClick={() => {
                navigate(
                  '/inventory?minPrice=23499&maxPrice=420000&minMileage=1300&maxMileage=240483'
                );
              }}
            >
              Inventory
            </Link>
            <Link
              to={'/salesrepresentatives'}
              className='footerInfoBoxSingle-link'
            >
              Sales Representatives
            </Link>
            <Link to={'/aboutUs'} className='footerInfoBoxSingle-link'>
              About Us
            </Link>
            <Link to={'/marketing'} className='footerInfoBoxSingle-link'>
              Marketing
            </Link>
          </div>
        </div>
        <div className='footerInfoBoxSingle'>
          <div className='footerInfoBoxSingle-title'>Office Locations</div>
          <div className='footerInfoBoxSingle-links'>
            <p
              className='footerInfoBoxSingle-link'
              onClick={() => {
                navigate('/salesrepresentatives');
              }}
            >
              80 Scott Ln, Jackson, WY 83002
            </p>
            <p
              className='footerInfoBoxSingle-link'
              onClick={() => {
                navigate('/salesrepresentatives');
              }}
            >
              5711 W Century Blvd, Los Angeles, CA 90045
            </p>
            <p
              className='footerInfoBoxSingle-link'
              onClick={() => {
                navigate('/salesrepresentatives');
              }}
            >
              1100 Congress Ave., Austin, TX 78701
            </p>
            <p
              className='footerInfoBoxSingle-link'
              onClick={() => {
                navigate('/salesrepresentatives');
              }}
            >
              50 N Temple, Salt Lake City, UT 84150
            </p>
          </div>
        </div>
        <div className='footerInfoBoxSingle'>
          <div className='footerInfoBoxSingle-links footerInfoLast'>
            <div className='footerRights'>
              ® {currentYear} Carstro. All Rights Reserved
            </div>

            <a
              href='https://bpa.org'
              target='_blank'
              rel='noreferrer'
              className='footer_bpa'
            >
              <img src='/footerImages/bpa.png' alt='BPA svg' />
            </a>

            <div className='footerSocialMediaIcons'>
              <a
                href='http://facebook.com'
                target='_blank'
                rel='noreferrer'
                className='footerSocialMediaIcon'
              >
                <FacebookOutlinedIcon />
              </a>
              <a
                href='http://twitter.com'
                target='_blank'
                rel='noreferrer'
                className='footerSocialMediaIcon'
              >
                <TwitterIcon />
              </a>
              <a
                href='http://instagram.com'
                target='_blank'
                rel='noreferrer'
                className='footerSocialMediaIcon'
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
