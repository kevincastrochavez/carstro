import { Api, Google } from '@mui/icons-material';
import React from 'react';
import Button from '../components/Button';
import SaleRepresentativeCard from '../components/SaleRepresentativeCard';




let saleRepresntative = [ 
  {
      name:"Cindy Castro",
      location:"Salt Lake, UT",
      email:"cindyc@carstro.com",
      hours:"8:00am - 5:00pm",
      phone:"385-354-1824",
      image:"https://media.licdn.com/dms/image/C4D03AQH52yLOl5cr2Q/profile-displayphoto-shrink_400_400/0/1624946869183?e=1676505600&v=beta&t=JOVSrsRDJeI8OFmDSbOt3rM7_vsvgTU1ozkZaXDpNEY"

  },

  {
      name:"Andres Castro",
      location:"Rexburg, ID",
      email:"guevaracastroandres@gmail.com",
      hours:"8:00am - 5:00pm",
      phone:"2087603945",
      image:"https://media.licdn.com/dms/image/C5603AQG0WZ0LYEGlhg/profile-displayphoto-shrink_400_400/0/1603579950379?e=1676505600&v=beta&t=fPY6ElAj0p28s-tILBo45NqQAri8QXp6INuSZRcTTQE"

  },

  {
      name:"Kevin Castro",
      location:"Denver, CO",
      email:"kevin@gmail.com",
      hours:"8:00am - 5:00pm",
      phone:"12354353454",
      image:"https://media.licdn.com/dms/image/D5603AQGwGhhpYxo1-Q/profile-displayphoto-shrink_400_400/0/1664410456785?e=1676505600&v=beta&t=0DSq5nP7PQklpje6QGodpMq6klPJnhK44rUo7ekv5Uw"

  },

  {
      name:"Ignacio Villar ",
      location:"Denver, CO",
      email:"ignacio@gmail.com",
      hours:"8:00am - 5:00pm",
      phone:"12354353454",
      image:"https://media.licdn.com/dms/image/D4E35AQEnqE5PgDgTvg/profile-framedphoto-shrink_400_400/0/1634319087952?e=1671775200&v=beta&t=PcFfngmRaKUScQl9PMZGKepveistnT-0DtfBzUke8oQ"

  },

]

let saltLake = document.querySelector('#saltLake')
let trigger = document.querySelector('#active_saltLake')

saltLake.addEventListener('click', () => { 
  if(saltLake.style.display === 'none'){
    saltLake.style = 'block';
  } else {
    saltLake.style = 'none';
  }
});



// Trying to inser the Li elements using a loop
// const locations = document.getElementById('salesRepresentatives_ul');

// for(let i = 0; i < 4; i ++) {
//   const li = document.createElement('li');
//   li.textContent = 'uno'
//   locations.appendChild(li)
// }
          


function SalesRepresentatives() {
  return(
  <main className='salesRepresentatives_main'>
    <h1 className='main_h1'>Sales Representatives</h1>
    <section className='main_section'>
      <div>
        <ul id='salesRepresentatives_ul'>
          <li id='saltLake'className='div_ul_li'><a id='active_saltLake'>Salt Lake, UT</a>
            <SaleRepresentativeCard image={saleRepresntative[0].image} name = {saleRepresntative[0].name} location={saleRepresntative[0].location} email ={saleRepresntative[0].email} hours ={saleRepresntative[0].hours} phone={saleRepresntative[0].phone}></SaleRepresentativeCard>
          </li>
          <li className='div_ul_li'>Rexburg, ID
            <SaleRepresentativeCard image={saleRepresntative[1].image} name = {saleRepresntative[1].name} location={saleRepresntative[1].location} email ={saleRepresntative[1].email} hours ={saleRepresntative[1].hours} phone={saleRepresntative[1].phone}></SaleRepresentativeCard>
          </li>
          <li className='div_ul_li'>Denver, CO
            <SaleRepresentativeCard image={saleRepresntative[2].image} name = {saleRepresntative[2].name} location={saleRepresntative[2].location} email ={saleRepresntative[2].email} hours ={saleRepresntative[2].hours} phone={saleRepresntative[2].phone}></SaleRepresentativeCard>
          </li>
          <li className='div_ul_li'>Los Angeles, CA
            <SaleRepresentativeCard image={saleRepresntative[3].image} name = {saleRepresntative[3].name} location={saleRepresntative[3].location} email ={saleRepresntative[3].email} hours ={saleRepresntative[3].hours} phone={saleRepresntative[3].phone}></SaleRepresentativeCard>
          </li>
        </ul>
      </div>
    </section>
    <section>
    </section>
  </main>
  );
}

export default SalesRepresentatives;

