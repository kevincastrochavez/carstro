// ANDRES

import React from 'react';

function Button({ text, bgColor }) {
  return <button className={`btn btn__${bgColor}`}>{text}</button>;
}

export default Button;
