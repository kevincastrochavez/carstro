import React from 'react';

function BrowseByBrand() {
  return (
    <div className='homeBrowseByBrand'>
      <h2 className='homeSingleBrand'>Browse by Brand</h2>
      <div className='homeBrandLogos'>
        <div className='homeBrandLogos-column'>
          <div className='homeBrandLogos-singleLogo'>
            <div className='homeBrandLogos-singleLogo-logo'>
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Kia.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Kia</div>
          </div>
          <div className='homeBrandLogos-singleLogo'>
            <div className='homeBrandLogos-singleLogo-logo'>
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Renault.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Renault</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo singleLogo_none'
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Ferrari.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Ferrari</div>
          </div>
        </div>
        <div className='homeBrandLogos-column'>
          <div className='homeBrandLogos-singleLogo singleLogo_none'>
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/BMW.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>BMW</div>
          </div>
          <div className='homeBrandLogos-singleLogo'>
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Lamborghini.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Lamborghini</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Jaguar.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Jaguar</div>
          </div>
        </div>
        <div className='homeBrandLogos-column'>
          <div className='homeBrandLogos-singleLogo'>
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Audi.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Audi</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Ford.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Ford</div>
          </div>
          <div
            className='homeBrandLogos-singleLogo'
            id='homeSingleBrandLogoLast2'
          >
            <div className='homeBrandLogos-singleLogo-logo'>
              {' '}
              <img
                className='singleBrandLogo'
                src='singleBrandImages/Honda.png'
                alt=''
              />
            </div>
            <div className='homeBrandLogos-singleLogo-text'>Honda</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseByBrand;
