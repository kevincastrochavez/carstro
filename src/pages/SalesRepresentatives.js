import React, { useEffect, useState } from 'react';
import SaleRepresentativeCard from '../components/SaleRepresentativeCard';
import Map from '../components/Map';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import { saleRepresntative } from '../utilities/srObject.js';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SalesRepresentatives() {
  const [{ carsResults }, dispatch] = useStateValue();
  const [opeMap, setopeMap] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setDeviceWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        console.log('Event listener for the window was removed');
      });
    };
  }, []);

 

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

          // Setting the min and max for the price and mileage
          dispatch({
            type: 'SET_MIN_MAX_PRICE_FILTER',
            minMaxPrice: [minPrice, maxPrice],
          });

          dispatch({
            type: 'SET_MIN_MAX_MILEAGE_FILTER',
            minMaxMileage: [minMileage, maxMileage],
          });
        })
        .catch((error) => {
          console.log('Error fetching the DB', error);
        });
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

// logig


  return (
    <div className='salesRepresentativesContainer'>
      <main className='salesRepresentatives_main'>
        <h1 className='main_h1'>Sales Representatives</h1>
        <div className='salesRepresentatives_main_div'>
        {
           deviceWidth <= 990 &&  <div className='salesRepresentatives_main_div_divButtons'> 
             <div className={`${!opeMap && "grayBackground"} salesRepresentatives_main_div_listButton`} id='listButton' onClick={()=> setopeMap(false)}> <FormatListBulletedIcon/> Dealers list</div>
             <div className={`${opeMap && "grayBackground"} salesRepresentatives_main_div_listButton`} id='mapButton' onClick={()=> setopeMap(true)}> <LocationOnIcon/>Locations Map</div>
            </div>
        }
          {
           (!opeMap || deviceWidth >= 990) && <section className='main_section_representatives'>
           <div className='sales-scrollbarSeparation'>
             <ul id='salesRepresentatives_ul'>
               {saleRepresntative.map((item) => (
                 <SaleRepresentativeCard {...item} />
               ))}
             </ul>
           </div>
         </section>  
          } 
         {
           (opeMap || deviceWidth >= 990) &&  <section className='main_section_map'>
          <iframe src="https://snazzymaps.com/embed/475196" className="map"></iframe>
        </section>
         }
        </div>
      </main>
    </div>
  );
}

export default SalesRepresentatives;
