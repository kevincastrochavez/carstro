import React, { useState } from 'react';

function Checkbox({ id, name, value, onChange, clearAll, hidden }) {
  const [isChecked, setIsChecked] = useState(false);

  console.log(name);

  return (
    <input
      type='checkbox'
      id={`${id}-car`}
      name={name}
      value={value}
      checked={clearAll ? false : isChecked}
      onChange={onChange}
      onClick={() => setIsChecked(!isChecked)}
      hidden={hidden && true}
    />
  );
}

export default Checkbox;
