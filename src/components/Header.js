// CINDY

import React from "react";

function Header({ logo, link1, link2, link3, link4, className, id }) {
  return (
    <header className={`${className && className} btn`} id={id && id}>
      {logo}
      {link1}
      {link2}
      {link3}
      {link4}
    </header>
    // <div>Header</div>
  );
}

export default Header;
