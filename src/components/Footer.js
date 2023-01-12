// CINDY
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useStateValue } from '../StateProvider';

function Footer() {
  const [{ minMaxPrice, minMaxMileage }, dispatch] = useStateValue();
  let navigate = useNavigate();

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
            <Link to={'/aboutus'} className='footerInfoBoxSingle-link'>
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
          {/* <div className="footerInfoBoxSingle-title"></div> */}

          <div className='footerInfoBoxSingle-links'>
            <div className='footerRights'>® 2023 ABC All Rights Reserved</div>
            <div className='footerSocialMediaIcons'>
              <Link to='http://facebook.com' className='footerSocialMediaIcon'>
                <FacebookOutlinedIcon />
              </Link>
              <Link to='http://twitter.com' className='footerSocialMediaIcon'>
                <TwitterIcon />
              </Link>
              <Link to='http://instagram.com' className='footerSocialMediaIcon'>
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
