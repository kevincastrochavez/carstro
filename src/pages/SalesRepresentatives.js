import React, { useEffect } from "react";

import SaleRepresentativeCard from "../components/SaleRepresentativeCard";
import Map from "../components/Map";
import { useStateValue } from "../StateProvider";
import db from "../firebase";

const saleRepresntative = [
  {
    id: "sl",
    name: "Cindy Castro",
    location: "Salt Lake, UT",
    lat: "40.770447000000004",
    lng: "-111.89254654767032",
    email: "cindyc@carstro.com",
    hours: "8:00am - 5:00pm",
    phone: "385-354-1824",
    address: "example 234 S 3456",
    image:
      "https://media.licdn.com/dms/image/C4D03AQH52yLOl5cr2Q/profile-displayphoto-shrink_400_400/0/1624946869183?e=1676505600&v=beta&t=JOVSrsRDJeI8OFmDSbOt3rM7_vsvgTU1ozkZaXDpNEY",
  },

  {
    id: "rx",
    name: "Andres Castro",
    location: "Rexburg, ID",
    lat: "43.82465852358263",
    lng: "-111.78084611892702",
    email: "guevaracastroandres@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "2087603945",
    address: "example 234 S 3456",
    image:
      "https://media.licdn.com/dms/image/C5603AQG0WZ0LYEGlhg/profile-displayphoto-shrink_400_400/0/1603579950379?e=1676505600&v=beta&t=fPY6ElAj0p28s-tILBo45NqQAri8QXp6INuSZRcTTQE",
  },

  {
    id: "dv",
    name: "Kevin Castro",
    location: "Denver, CO",
    lat: "39.7392364",
    lng: "-104.984862",
    email: "kevin@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "12354353454",
    address: "example 234 S 3456",
    image:
      "https://media.licdn.com/dms/image/D5603AQGwGhhpYxo1-Q/profile-displayphoto-shrink_400_400/0/1664410456785?e=1676505600&v=beta&t=0DSq5nP7PQklpje6QGodpMq6klPJnhK44rUo7ekv5Uw",
  },

  {
    id: "la",
    name: "Ignacio Villar ",
    location: "Los Angeles. CA",
    lat: "34.0536909",
    lng: "-118.242766",
    email: "ignacio@gmail.com",
    hours: "8:00am - 5:00pm",
    phone: "12354353454",
    address: "example 234 S 3456",
    image:
      "https://media.licdn.com/dms/image/D4E35AQEnqE5PgDgTvg/profile-framedphoto-shrink_400_400/0/1634319087952?e=1672855200&v=beta&t=8-7ioCj9LwSwYLSXKb9W6diL9iSby6U6mnKlJXmaMls",
  },
];

function SalesRepresentatives() {
  const [{ carsResults }, dispatch] = useStateValue();

  useEffect(() => {
    if (carsResults.length === 0) {
      db.collection("cars")
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
            type: "SET_CARS_RESULTS",
            carsResults,
          });

          // Setting the min and max for the price and mileage
          dispatch({
            type: "SET_MIN_MAX_PRICE_FILTER",
            minMaxPrice: [minPrice, maxPrice],
          });

          dispatch({
            type: "SET_MIN_MAX_MILEAGE_FILTER",
            minMaxMileage: [minMileage, maxMileage],
          });
        });
    }
  }, []);

  return (
    <div className="salesRepresentativesContainer">
      <main className="salesRepresentatives_main">
        <h1 className="main_h1">Sales Representatives</h1>
        <div className="salesRepresentatives_main_div">
          <section className="main_section_representatives">
            <div className="sales-scrollbarSeparation">
              <ul id="salesRepresentatives_ul">
                {saleRepresntative.map((item) => (
                  <SaleRepresentativeCard {...item} />
                ))}
              </ul>
            </div>
          </section>
          <section className="main_section_map">
            <h2 className="salesRepresentatives_section_h2">
              {" "}
              Find your Dealer
            </h2>
            <Map data={saleRepresntative} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default SalesRepresentatives;
