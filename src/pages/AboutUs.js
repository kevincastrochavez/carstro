import React from "react";
import { saleRepresntative } from "../utilities/srObject.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function AboutUs() {
  return (
    <div>
      <div className="about-us-top-img-container">
        <img
          className="about-us-car-img"
          src="aboutUsImages/about-us-car-mobile.jpeg"
          alt=""
        />
        <img
          className="about-us-car-img-ipad"
          src="aboutUsImages/about-us-car-ipad.jpeg"
          alt=""
        />
        <img
          className="about-us-car-img-large"
          src="aboutUsImages/about-us-car-large.jpeg"
          alt=""
        />
        <div className="about-us-h1-info-wrap">
          <h1 className="about-us-h1-title">About Us</h1>
          <div className="about-us-info-wrap">
            <div>
              <p className="about-us-p">
                CARSTRO was founded with the purpose of becoming the leading
                provider of vehicle history data for used car buyers and
                dealers. CARSTRO's largest vehicle history database in North
                America allows CARSTRO to earns the trust of millions of
                customers every year by giving them access to vehicle history
                data.
              </p>
              <p className="about-us-p">
                It is our experience that potential clients are extremely well
                informed when it comes to pursuing their next vehicle. As a
                result, CARSTRO has made the process of accessing all relevant
                vehicle information easy but without compromising quality.
              </p>
              <p className="about-us-p">
                As a result, when looking to buy a used car, our website offers
                you the following benefits:
              </p>
              <ul className="about-us-ul">
                <li className="about-us-li">
                  - The most extensive inventory of vehicles from dealers and
                  private sellers
                </li>
                <li className="about-us-li">
                  - The largest collection of buying and selling advice
                </li>
                <li className="about-us-li">
                  - The most comprehensive resources for study and comparison,
                  with reviews, images, and more
                </li>
                <li className="about-us-li">
                  - Pricing for vehicles, including seller discounts and dealer
                  rebates
                </li>
                <li className="about-us-li">
                  - Reports on car history and safety information
                </li>
                <li className="about-us-li">
                  - Assistance with financing, insurance, and warranty
                  initiatives
                </li>
              </ul>
              <p className="about-us-p">
                Not sure what kind of car you want? That's perfectly fine.
                CARSTRO allows you to investigate and compare used automobiles
                by searching for body, type, mileage, price, and a variety of
                other factors. You can find and compare vehicles that are ideal
                for your needs with the help of our dealers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-out-team">
        <h1 className="about-us-team-h1-title">Our People</h1>
        {saleRepresntative.map((item) => (
          //Sales Representative Cards
          <div className="about-us-card-representative">
            <img src={item.image} alt="Representative Name" />
            <p>{item.name}</p>
            <p>{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
