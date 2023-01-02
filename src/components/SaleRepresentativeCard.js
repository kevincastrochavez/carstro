// ANDRES

import React, { useState } from "react";
import Button from "../components/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useEffect } from 'react';
function SaleRepresentativeCard({
  id,
  name,
  location,
  lat,
  lng,
  image,
  email,
  hours,
  phone,
  address,
}) {
  const [saleCardOpen, setSaleCarOpen] = useState(false);

  console.log(saleCardOpen);

  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  console.log(modalWindowOpen);

  const [deviceWidth, setDeviceWidth] = useState(0);

  let screenheight = window.innerHeight;
  // let ovelayDiv = document.querySelector(".modalWindow_overlay");
  // // Match the height of the overlay div with the screen height
  // ovelayDiv.style.height = screenheight;

  console.log("this is the devicewidth:" + deviceWidth);
  console.log("this is the device height:" + screenheight);


  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);
  return (
    <li
      className='saleRepresentativeCard_li'
      onClick={() => setSaleCarOpen(!saleCardOpen)}
    >
      {!saleCardOpen && (
        <div className="li_div--locationContainer">
          {deviceWidth <= 990 && (
            <div>
              <span>
                <LocationOnIcon className="saleRepresentativeCard_li_location" />

                <p className="saleRepresentativeCard_li_p">{location}</p>
              </span>
              <ExpandMoreIcon className="saleRepresentativeCard_li_arrow" />
            </div>
          )}
        </div>
      )}
      {(saleCardOpen || deviceWidth >= 990) && (
        <div id={id}>
          <div className="saleRepresentativeCard_div">
            <div className="saleRepresentativeCard_div--picturesContainer">
              <img className="saleRepresentativeCard_div_img" src={image}></img>

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

        <div className="modalWindow_overlay">
          <form className="modalWindow_form" action="">
            <div className="form_div-closeContainer">
              <CloseIcon onClick={() => setModalWindowOpen(!modalWindowOpen)} />
            </div>
            <h1 className="modalWindow_form_h1">Contact Delaer</h1>
            <h4 className="modalWindow_form_h4">{name}</h4>
            <p className="modalWindow_form_p--location">{location}</p>
            <p className="modalWindow_form_p--address">{address}</p>
            <p className="modalWindow_form_p--contatInformation">
              Contact information
            </p>
            <input
              className="modalWindow_form_input"
              type="text"
              placeholder="Name"
            />
            <input
              className="modalWindow_form_input"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="modalWindow_form_input"
              type="text"
              placeholder="Email"
            />
            <div className="modalWindow_form_div">
              <h4 className="form_div_h4">Special Requirements</h4>
              <div>
                <input
                  className="form_div_checkBox"
                  type="checkbox"
                  name="spanish_representative"
                />
                <label htmlFor="spanish_representative">
                  Request a Spanish-speaker representative
                </label>
              </div>
              <div>
                <input
                  className="form_div_checkBox"
                  type="checkbox"
                  name="test_drvie"
                />
                <label htmlFor="test_drvie">Schedule a testdrive</label>
              </div>
              <div>
                <input
                  className="form_div_checkBox"
                  type="checkbox"
                  name="trade_in"
                />
                <label htmlFor="test_drvie"> Trade in a Vehicle</label>
              </div>
              <div id="form_div_div--comment-container">
                <label className="form_div_label--comment" htmlFor="comment">
                  Add a comment
                </label>
                <textarea name="comment" id="comment" rows="10"></textarea>
                <Button
                  text="Contact Dealer"
                  className="btn_green modalWindow_button"
                />
              </div>
            </div>

          </form>
        </div>
      )}
    </li>
  );
}

export default SaleRepresentativeCard;
