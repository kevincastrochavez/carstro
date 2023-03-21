import React, { useEffect } from "react";

import { useStateValue } from "../StateProvider.js";
import { saleRepresntative } from "../utilities/srObject.js";
import db from "../firebase";

function AboutUs() {
  const [{ carsResults }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "-340px",
    }
  );

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
        })
        .catch((error) => {
          console.log("Error fetching the DB", error);
        });
    }

    cards.forEach((card) => observer.observe(card));
  }, [cards]);

  return (
    <div className="aboutUsMainContainer">
      <div className="aboutUsContainer">
        <div className="about-us-h1-info-wrap">
          <h1 className="about-us-h1-title">About Us</h1>
          <div className="about-us-info-wrap">
            <div className="aboutus-scrollbarSeparation">
              <p className="about-us-p">
                <p className="card">
                  <h2 className="aboutUsSubtitle">Our purpose</h2> The goal of
                  Carstro® is to establish itself as the foremost supplier of
                  used car services to both buyers and dealers. With the largest
                  vehicle database in North America, we offer millions of
                  customers per year the assurance and optimal deals they seek.
                </p>
                <br />
                <br />
                <p className="card">
                  <h2 className="aboutUsSubtitle">Our experience</h2> With half
                  a century of experience in the industry, we have established
                  ourselves as the premier destination for top-quality cars at
                  unbeatable prices. Our extensive expertise also enables us to
                  provide unparalleled guidance to customers as they pursue
                  their dream car.
                </p>
                <br />
                <br />
                <p className="card">
                  <h2 className="aboutUsSubtitle">The benefits</h2> Apart from
                  boasting the largest collection of vehicles from both private
                  sellers and dealerships, Carstro's® website provides you with:
                </p>
                <br />
                <br />
                <p className="">
                  <ul class="checkmark">
                    <li className="card">
                      &#10003; Tools and resources to make vehicle comparisons
                    </li>

                    <br />
                    <li className="card">
                      &#10003; Precise photographs of our cars
                    </li>

                    <br />
                    <li className="card">
                      &#10003; Calculators that can be customized to your
                      preferences
                    </li>

                    <br />
                    <li className="card">
                      &#10003; Comprehensive reports on the history and safety
                      details of each car
                    </li>

                    <br />
                    <li className="card">
                      &#10003; Support with financing, insurance, and warranties
                    </li>
                  </ul>
                </p>
                <br />
                <br />
                <p className="card">
                  <h2 className="aboutUsSubtitle">Still lost?</h2>
                  Feeling unsure about where to begin? No problem! Our
                  <br />
                  <a className="aboutUsLinkSalesR" href="/salesRepresentatives">
                    {" "}
                    representatives
                  </a>{" "}
                  are eager to assist you every step of the way. Schedule an
                  appointment today at absolutely no cost to you!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-our-team">
        <h2 className="about-us-team-h2-title">Our People</h2>

        <div className="aboutUs_representativesContainer">
          {saleRepresntative.map((item) => (
            //Sales Representative Cards
            <div className="about-us-card-representative card">
              <img src={item.image} alt="Representative Name" />
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
