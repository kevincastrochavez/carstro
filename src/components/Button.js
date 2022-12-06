// ANDRES

import React from "react";

function Button({ text, padding, margin, id }) {
  return (
    <button className={`${padding && padding} ${margin && margin} btn`} id={id && id}>
      {text}
    </button>
  );
}

export default Button;
