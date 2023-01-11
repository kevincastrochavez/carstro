// Cindy
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import db from '../firebase';
import { useStateValue } from '../StateProvider';
import { saleRepresntative } from '../utilities/srObject.js';

// TODO

// Fix Find Yours button

function Homepage() {
  let navigate = useNavigate();
  const [{ carsResults, minMaxPrice, minMaxMileage }, dispatch] =
    useStateValue();

  useEffect(() => {
    if (carsResults.length === 0) {
      db.collection('cars')
        .get()
        .then((cars) => {
          const carsResults = cars.docs.map((car) => {
            return { ...car.data(), carId: car.id };
          });

          const pricesArray = carsResults.map((car) => Number(car.price));
          const minPrice = Math.min(...pricesArray);
          const maxPrice = Math.max(...pricesArray);

          const milesArray = carsResults.map((car) => Number(car.odometer));
          const minMileage = Math.min(...milesArray);
          const maxMileage = Math.max(...milesArray);

          dispatch({
            type: 'SET_CARS_RESULTS',
            carsResults,
          });

          dispatch({
            type: 'SET_MIN_MAX_PRICE_FILTER',
            minMaxPrice: [minPrice, maxPrice],
          });

          dispatch({
            type: 'SET_MIN_MAX_MILEAGE_FILTER',
            minMaxMileage: [minMileage, maxMileage],
          });
        });
    }
  }, []);
  return (
    <div className='homepage-container'>
      <div className='bannerContainer'>
        <div className='main-image'>
          <img
            className='home-mainImage home-mainImage-l'
            src='homepageImages/main-l.jpg'
            alt='Audi car in road on Fall season'
          />
          <img
            className='home-mainImage home-mainImage-m'
            src='homepageImages/main-m.jpg'
            alt='Audi car in road on Fall season'
          />
          <img
            className='home-mainImage home-mainImage-s'
            src='homepageImages/main-s.jpg'
            alt='Audi car in road on Fall season'
          />
        </div>
        <div className='home-mainText'>
          <div className='home-main-Title'>
            <h1>Same quality, lower price</h1>
          </div>
          <div className='home-main-Subtitle'>
            <p1>
              Our vision is to help more people to own their dream car, and we
              are making it possible...
            </p1>
          </div>
          <button
            type='button'
            className='exploreInput'
            id='homeFindYoursButton'
            onClick={() => {
              navigate(
                `/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`
              );
            }}
          >
            Find Yours
          </button>
        </div>
      </div>

      <div className='exploreVehicles'>
        <div className='exploreVehicles-box'>
          <div className='exploreVehicles-text'>Explore Vehicles</div>
          <div className='exploreVehicles-input'>
            <form action='/action_page.php' className='homeForm'>
              <div className='home__select'>
                <select name='brand' className='exploreInput' id='exploreBrand'>
                  <option value='selectBrand'>Select Brand</option>
                  <option value='volvo'>Volvo</option>
                  <option value='saab'>Saab</option>
                  <option value='opel'>Opel</option>
                  <option value='audi'>Audi</option>
                </select>

                <KeyboardArrowDownIcon />
              </div>

              <div className='home__select'>
                <select
                  name='vehicle'
                  className='exploreInput'
                  id='exploreVehicle'
                >
                  <option value='selectVehicle'>Select Vehicle</option>
                  <option value='sedan'>Sedan</option>
                  <option value='sports'>Sports</option>
                  <option value='convetible'>Convertible</option>
                </select>

                <KeyboardArrowDownIcon />
              </div>
              <input
                type='submit'
                value='View Inventory'
                className='exploreInput'
                id='exploreSubmit'
                onClick={() => {
                  navigate('/inventory');
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <div to='/marketing' className='home-marketing-section'>
        <div className='marketing-image'>
          <img
            className='home-marketingImage home-marketingImage-l'
            src='homepageImages/markLarge.png'
            alt='Car in sand for marketing purposes'
          />
          <img
            className='home-marketingImage home-marketingImage-s'
            src='homepageImages/markSmall.png'
            alt='Car in sand for marketing purposes'
          />
        </div>
        <div className='marketing-text'>
          <div className='marketing-title-and-text'>
            <h2>2023 Corolla Hybrid</h2>
            <p2r>Sleek and steady wins the race</p2r>
          </div>
          <Link to='/marketing' className='marketing-text-button'>
            <button className='home-marketing-button'>
              <h5>Learn More</h5>
            </button>
          </Link>
        </div>
      </div>

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
              <div className='homeBrandLogos-singleLogo-text'>Kia Cars</div>
            </div>
            <div className='homeBrandLogos-singleLogo'>
              <div className='homeBrandLogos-singleLogo-logo'>
                <img
                  className='singleBrandLogo'
                  src='singleBrandImages/Renault.png'
                  alt=''
                />
              </div>
              <div className='homeBrandLogos-singleLogo-text'> Renault</div>
            </div>
            <div className='homeBrandLogos-singleLogo'>
              <div className='homeBrandLogos-singleLogo-logo'>
                {' '}
                <img
                  className='singleBrandLogo'
                  src='singleBrandImages/BMW.png'
                  alt=''
                />
              </div>
              <div className='homeBrandLogos-singleLogo-text'>BMW Cars</div>
            </div>
          </div>
          <div className='homeBrandLogos-column'>
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
            <div className='homeBrandLogos-singleLogo'>
              <div className='homeBrandLogos-singleLogo-logo'>
                {' '}
                <img
                  className='singleBrandLogo'
                  src='singleBrandImages/Audi.png'
                  alt=''
                />
              </div>
              <div className='homeBrandLogos-singleLogo-text'>Audi Cars</div>
            </div>
            <div
              className='homeBrandLogos-singleLogo'
              id='homeSingleBrandLogoLast2'
            >
              <div className='homeBrandLogos-singleLogo-logo'>
                {' '}
                <img
                  className='singleBrandLogo'
                  src='singleBrandImages/GMC.png'
                  alt=''
                />
              </div>
              <div className='homeBrandLogos-singleLogo-text'>
                General Motors
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='homeSingleBrand'>Sales Representatives</h2>

      <div className='home_salesRepresentative'>
        {saleRepresntative.map((item) => (
          <div className='home_salesRepresentative-card' key={item.id}>
            <img src={item.image} alt={`${item.name} sales representative`} />

            <div className='home_salesRepresentative-info'>
              <p>{item.name}</p>

              <div className='home_salesRepresentative-location'>
                <LocationOnIcon />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
