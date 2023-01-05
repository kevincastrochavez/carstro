// Cindy
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import db from "../firebase";
import { useStateValue } from "../StateProvider";

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
          className="home-mainImage"
          src="homepageImages/main-l.jpg"
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <h1>Home</h1>
      <Link
        to={`/inventory?minPrice=${minMaxPrice[0]}&maxPrice=${minMaxPrice[1]}&minMileage=${minMaxMileage[0]}&maxMileage=${minMaxMileage[1]}`}
      >
        Inventory
      </Link>
    </div>
  );
}

export default Homepage;
