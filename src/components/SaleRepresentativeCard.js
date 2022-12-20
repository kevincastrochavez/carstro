// ANDRES
import React, { useState } from 'react';
import Button from '../components/Button';

function SaleRepresentativeCard({
  name,
  location,
  image,
  email,
  hours,
  phone,
}) {
  const [saleCardOpen, setSaleCarOpen] = useState(false);
  console.log(saleCardOpen);
  return (
    <li
      className='saleRepresentativeCard_li'
      onClick={() => setSaleCarOpen(!saleCardOpen)}
    >
      <p className='saleRepresentativeCard_li_p'>{location}</p>
      {saleCardOpen && (
        <div>
          <div className='saleRepresentativeCard_div'>
            <div className='saleRepresentativeCard_div--picturesContainer'>
              <img className='saleRepresentativeCard_div_img' src={image}></img>
            </div>
            <div className='saleRepresentativeCard_div--locationsContainer'>
              <h4 className='saleRepresentativeCard_div_img_h4'>{name}</h4>
              <ul className='saleRepresentativeCard_ul'>
                <div>
                  <li className='saleRepresentativeCard_ul_li'>{location}</li>
                  <li className='saleRepresentativeCard_ul_li'>{email}</li>
                </div>
                <div>
                  <li className='saleRepresentativeCard_ul_li'>{hours}</li>
                  <li className='saleRepresentativeCard_ul_li'>{phone}</li>
                </div>
              </ul>
              {/* This button is only displayed for the tablet view */}
              <Button text='Request a Quote' className='btn_green rq_tablet' />
            </div>
          </div>
          <Button text='Request a Quote' className='btn_green' />
        </div>
      )}
    </li>
  );
}

export default SaleRepresentativeCard;
