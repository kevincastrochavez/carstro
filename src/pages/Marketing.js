import React from "react";

function Marketing() {
  return (
    <div className="marketingContainer">
      <div className="marketing-top-img-container">
        <img
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
        />
      </div>
      <div className="marketing-h1-info-wrap">
        <div className="marketing-h1-container">
          <h1 className="marketing-h1">
            The role of electric cars in the race towards sustainability
          </h1>
        </div>
        <div className="marketing-wrap-text-img">
          <div className="marketing-p-container">
            <p className="marketing-p">
              The Electric Vehicle has become an unstoppable revolution despite
              many obstacles. Specialists agree that there is still a long way
              to go until all the cars sold abandon gasoline or diesel as fuel
              in favor of alternatives that contribute less to the climate
              crisis, such as electric batteries or fuel cells. of hydrogen.
            </p>
            <p className="marketing-p">
              Although it is true that many times electric cars have been
              presented as a futuristic means of transport, today they are an
              increasingly common reality. Electric mobility promotes the
              conservation of the environment, reduces the emission of
              greenhouse gases, noise pollution, among others. However, few
              manufacturers offer 100% electric alternatives.
            </p>
            <p className="marketing-p">
              These cars are present in the automotive market with models such
              as the Volkswagen ID3, the I Oniq Hyundai, among others.{" "}
            </p>
            <p className="marketing-p">
              On average, electric cars have a maintenance cost of 20% to 40%
              less than combustion vehicles. In addition, they help in the
              transition towards sustainable mobility through the use of
              eco-friendly energy alternatives that leave fossil fuel behind. At
              the national level, around 3,500 electric cars circulate;
              approximately one hundred of these do not need fuel and do not
              emit gases.
            </p>
            <p className="marketing-p">
              In the last two years, all automakers have rushed to sign deals
              with mining companies that extract cobalt and lithium, the two
              main battery components, and with other companies to secure
              supplies of the necessary materials.
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
          “The automotive sector is undergoing a revolution to leave combustion
          engines in oblivion and contribute less to the climate crisis”
        </p>
      </div>
    </div>
  );
}

export default Marketing;
