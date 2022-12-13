// ANDRES

import React from 'react';

function Button({ text, bgColor, className }) {
  return <button className={`btn btn__${bgColor} ${className}`}>{text}</button>;
}

export default Button;
