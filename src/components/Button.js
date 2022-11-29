// ANDRES

import React from "react";

function Button({ text, className, id }) {
  return (
    <button className={`${className && className} btn`} id={id && id}>
      {text}
    </button>
  );
}

export default Button;
