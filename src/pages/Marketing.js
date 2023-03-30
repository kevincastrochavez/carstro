import React, { useEffect } from "react";

import { useStateValue } from "../StateProvider";
import db from "../firebase";

import marketingVideo from "../optimized.mp4";

function Marketing() {
  const [{ carsResults }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
  }, []);

  return (
    <div className="marketingContainer">
      <div className="marketing-top-img-container">
        <video
          src={marketingVideo}
          autoPlay
          loop
          controls
          muted
          id="marketingVideoMKG"
        ></video>
        {/* <img
          className="marketing-car-rock-img"
          src="marketingImages/marketing-car-rock.jpg"
          alt=""
        />
        <img
          className="marketing-car-rock-img-ipad"
          src="marketingImages/marketing-car-rock-ipad.jpg"
          alt=""
        />
        <img
          className="marketing-car-rock-img-large"
          src="marketingImages/marketing-car-rock-large.jpg"
          alt=""
        /> */}
      </div>
      <div className="marketing-h1-info-wrap">
        <div className="marketing-h1-container">
          <h1 className="marketing-h1">
            3 Not-So-Obvious Reasons to Buy a Luxury Car
          </h1>
        </div>
        <div className="marketing-wrap-text-img">
          <div className="marketing-p-container">
            <p className="marketing-p">
              Luxury cars are often associated with status and prestige, but
              there are many other reasons why buying a luxury car might be a
              smart investment. In this article, we'll explore three
              not-so-obvious reasons to consider buying a luxury car.
            </p>
            <p className="marketing-p">
              <h2>Advanced Safety Features</h2>Luxury cars often come with
              advanced safety features that aren't found in standard cars. These
              features can include adaptive cruise control, lane departure
              warning, and pedestrian detection systems. Additionally, luxury
              car manufacturers often invest heavily in safety research and
              development, resulting in some of the safest cars on the road.
              While safety features might not be the first thing that comes to
              mind when thinking about luxury cars, they can provide peace of
              mind and help prevent accidents.
            </p>
            <p className="marketing-p">
              <h2>Better Driving Experience</h2> Luxury cars are designed with
              the driving experience in mind. They often come equipped with
              features such as advanced suspension systems, powerful engines,
              and precision handling, all of which contribute to a smoother and
              more enjoyable ride. Additionally, luxury cars are often quieter
              and more comfortable than standard cars, making them ideal for
              long drives. Investing in a luxury car can enhance your driving
              experience and make every trip more enjoyable.
            </p>
            <p className="marketing-p">
              <h2>Long-Term Value</h2>
              While luxury cars can be expensive upfront, they often hold their
              value better than standard cars. Luxury car manufacturers use
              higher-quality materials and construction techniques, resulting in
              cars that are more durable and less likely to experience
              mechanical problems. Additionally, luxury cars often come with
              longer warranties and better maintenance programs, which can help
              keep the car running smoothly and maintain its value. Investing in
              a luxury car can be a smart long-term financial decision, as the
              car is likely to retain its value better than a standard car.
            </p>{" "}
            <p className="marketing-p">
              In conclusion, luxury cars offer more than just status and
              prestige. They can provide advanced safety features, a better
              driving experience, and long-term value. While the initial cost of
              a luxury car may be higher than a standard car, the investment can
              pay off in the long run.
            </p>
          </div>
          <div className="marketing-bot-img-container">
            <img
              className="marketing-white-car-img-mobile"
              src="marketingImages/marketing-white-car-mobile.jpg"
              alt=""
            />
            <img
              className="marketing-white-car-img-ipad"
              src="marketingImages/marketing-white-car-ipad.jpg"
              alt=""
            />
            <img
              className="marketing-white-car-img-large"
              src="marketingImages/marketing-white-car-large.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="marketing-quote-container">
        <p className="marketing-p-quote">
          “Luxury car manufacturers use higher-quality... construction
          techniques, resulting in cars that are... less likely to experience
          mechanical problems”
        </p>
      </div>
    </div>
  );
}

export default Marketing;
