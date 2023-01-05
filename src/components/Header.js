// CINDY

// import React from "react";

// function Header({ logo, link1, link2, link3, link4, className, id }) {
//   return (
//     <header className={`${className && className} btn`} id={id && id}>
//       {logo}
//       {link1}
//       {link2}
//       {link3}
//       {link4}
//     </header>
//   );
// }

// export default Header;
// -----------------------------------------------------------------

// import React, { useState } from "react";
// import header from "./header.module.css";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
// import PropTypes from "prop-types";

function Header(props) {
  // const [showLinks, setShowLinks] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="header">
      <div className="leftSide">
        <img className="header-logo" src="headerImages/logo.png" alt="" />
        {/* <img
          className="logo"
          src="../../public/headerImages/logo.png"
          alt="logo"
          onClick={() => {
            navigate("#");
          }}
        /> */}
      </div>
      <div className="rightSide">
        <div className="links" id="showLinks">
          {/* <a id={welcome}>Welcome {userFirstName} |</a> */}

          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                navigate("/");
              }}
            >
              Homepage
            </button>
            <div className="dropdown_content"></div>
          </div>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                navigate("/inventory");
              }}
            >
              Inventory
            </button>
            <div className="dropdown_content"></div>
          </div>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                navigate("/salesrepresentatives");
              }}
            >
              Sales Representatives
            </button>
            <div className="dropdown_content"></div>
          </div>
          <div className="dropdown">
            <button
              className="signOut"
              id="dropbtn"
              onClick={() => {
                navigate("/aboutus");
              }}
            >
              About Us
            </button>
            <div className="dropdown_content"></div>
          </div>
        </div>

        <div className="hamWrapper">
          {/* <button className={outHam} onClick={() => setShowLinks(!showLinks)}>
            <FaHamburger />
          </button> */}
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default Header;
