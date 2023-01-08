import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

// import "./hamburger.scss";

function Hamburger() {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="navbar">
        <a href="#" className="menu-bars">
          <MenuIcon
            onClick={showSidebar}
            className="hamBarsIcon"
            styles="width: 100%; height: 40px;"
          />
        </a>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
        <ul className="nav-menu-items">
          {" "}
          <li className="nav-text">
            <a href="#">Inventory</a>
          </li>
          <li className="nav-text">
            <a href="#">Sales Representatives</a>
          </li>
          <li className="nav-text">
            <a href="#">About Us</a>
          </li>
          <li className="nav-text">
            <a href="#">Marketing</a>
          </li>
          <li className="nav-text">
            <a href="#">.</a>
          </li>
          <li className="nav-text">
            <a href="#">.</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Hamburger;
