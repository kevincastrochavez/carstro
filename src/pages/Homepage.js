// Cindy
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import db from "../firebase";
import { useStateValue } from "../StateProvider";
import SaleRepresentativeCard from "../components/SaleRepresentativeCard";

function Homepage() {
  let navigate = useNavigate();
  const [{ carsResults, minMaxPrice, minMaxMileage }, dispatch] =
    useStateValue();

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
    <div className="homepage-container">
      <div className="main-image">
        <img
          className="home-mainImage home-mainImage-l"
          src="homepageImages/main-l.jpg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="home-mainImage home-mainImage-m"
          src="homepageImages/main-m.jpg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="home-mainImage home-mainImage-s"
          src="homepageImages/main-s.jpg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {/* <h1>Home</h1> */}
      <Link
        to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
        className="homeInventoryLink"
      >
        Inventory
      </Link>
      <div className="exploreVehicles">
        <div className="exploreVehicles-box">
          <div className="exploreVehicles-text">Explore Vehicles</div>
          <div className="exploreVehicles-input">
            <form action="/action_page.php" className="homeForm">
              <select name="brand" className="exploreInput" id="exploreBrand">
                <option value="selectBrand">Select Brand</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select
                name="vehicle"
                className="exploreInput"
                id="exploreVehicle"
              >
                <option value="selectVehicle">Select Vehicle</option>
                <option value="sedan">Sedan</option>
                <option value="sports">Sports</option>
                <option value="convetible">Convertible</option>
              </select>
              <input
                type="submit"
                value="View Inventory"
                className="exploreInput"
                id="exploreSubmit"
              />
            </form>
          </div>
        </div>
      </div>
      <h2 className="homeSingleBrand">Browse by Brand</h2>
      <SaleRepresentativeCard />
    </div>
  );
}

export default Homepage;
