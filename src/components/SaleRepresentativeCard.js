// ANDRES
import React, { useState } from 'react';
import Button from '../components/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect } from 'react';
function SaleRepresentativeCard({
  name,
  location,
  image,
  email,
  hours,
  phone,
  address,
}) {
  const [saleCardOpen, setSaleCarOpen] = useState(false);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);
  return (
    <li
      className='saleRepresentativeCard_li'
      onClick={() => setSaleCarOpen(!saleCardOpen)}
    >
      {!saleCardOpen && (
        <div className='li_div--locationContainer'>
          <span>
            <LocationOnIcon className='saleRepresentativeCard_li_location' />
            <p className='saleRepresentativeCard_li_p'>{location}</p>{' '}
          </span>
          <ExpandMoreIcon className='saleRepresentativeCard_li_arrow' />
        </div>
      )}
      {(saleCardOpen || deviceWidth >= 990) && (
        <div>
          <div className='saleRepresentativeCard_div'>
            <div className='saleRepresentativeCard_div--picturesContainer'>
              <img className='saleRepresentativeCard_div_img' src={image}></img>
            </div>
            <div className='saleRepresentativeCard_div--locationsContainer'>
              <h4 className='saleRepresentativeCard_div_img_h4'>{name}</h4>
              <ul className='saleRepresentativeCard_ul'>
                <div>
                  <li className='saleRepresentativeCard_ul_li'>
                    <LocationOnIcon className='li_icon' />
                    {location}
                  </li>
                  <li className='saleRepresentativeCard_ul_li'>
                    <MailIcon className='li_icon' />
                    {email}
                  </li>
                </div>
                <div>
                  <li className='saleRepresentativeCard_ul_li'>
                    <WatchLaterIcon className='li_icon' />
                    {hours}
                  </li>
                  <li className='saleRepresentativeCard_ul_li'>
                    <PhoneIcon className='li_icon' />
                    {phone}
                  </li>
                </div>
              </ul>
            </div>
            <div className='saleRepresentativeCard_div--button'>
              <Button
                onClick={() => setModalWindowOpen(!modalWindowOpen)}
                text='Contact Dealer'
                className='btn_green'
              />
            </div>
          </div>
        </div>
      )}
      {modalWindowOpen && (
        <div
          className='ModalWindow_overlay'
          onClick={() => setModalWindowOpen(!modalWindowOpen)}
        >
          <form action=''>
            <div>
              <CloseIcon />
            </div>
            <h2>Contact Dealer</h2>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{address}</p>
          </form>
        </div>
      )}
    </li>
  );
}

export default SaleRepresentativeCard;
