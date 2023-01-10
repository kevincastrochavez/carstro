import React from "react";
import { saleRepresntative } from "../utilities/srObject.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";


function AboutUs() {
  let navigate = useNavigate();

  return (
    <div className="aboutUsMainContainer">
      <div className="aboutUsContainer">
        <div className="about-us-top-img-container">
          <img
            className="about-us-MainImage about-us-car-mobile"
            src="aboutUsImages/about-us-car-mobile.jpeg"
            alt=""
          />
          <img
            className="about-us-MainImage about-us-car-ipad"
            src="aboutUsImages/about-us-car-ipad.jpeg"
            alt=""
          />
          <img
            className="about-us-MainImage about-us-car-large"
            src="aboutUsImages/about-us-car-large.jpeg"
            alt=""
          />
        </div>
        <div className="about-us-h1-info-wrap">
          <h1 className="about-us-h1-title">About Us</h1>
          <div className="about-us-info-wrap">
            <div className="aboutus-scrollbarSeparation">
              <p className="about-us-p">
                <h3 className="aboutUsSubtitle">our purpose</h3> Carstro® was
                founded with the purpose of becoming the leading provider of
                used car buyers and dealers. Our vehicle database is the largest
                in North America, providing confidence and the very best deals
                to millions of customers per year.
                <br />
                <br />
                <h3 className="aboutUsSubtitle">our experience</h3> Our 50 years
                of experience in the market show that there is no better place
                to get both an excellent quality car and a great price. These
                years also allow us to guide customers better than any other
                company in their search for their dream.
                <br />
                <br />
                <h3 className="aboutUsSubtitle">the benefits</h3> In addition to
                having the most extensive inventory of vehicles from dealerships
                and private sellers, Carstro's® website offers you:
                <br />
                <br />
                <ul class="checkmark">
                  <li>&#10003; Resources and tools to compare vehicles</li>

                  <br />
                  <li>&#10003; Accurate photographs of our cars</li>

                  <br />
                  <li>&#10003; Calculators able to adjust to your needs</li>

                  <br />
                  <li>
                    &#10003; Reports on the history and safety information of
                    each car
                  </li>

                  <br />
                  <li>
                    &#10003; Assistance with financing initiatives, insurance,
                    and guarantees
                  </li>
                </ul>
                <br />
                <br />
                <h3 className="aboutUsSubtitle">still lost?</h3>
                Not sure where to start? That is perfectly fine!
                <br /> We have
                <a
                  className="aboutUsLinkSalesR"
                  onClick={() => {
                    navigate("/salesrepresentatives");
                  }}
                >
                  {" "}
                  representatives
                </a>{" "}
                who are eager to guide you through this process. Schedule an
                appointment today at no cost!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us-our-team">
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
