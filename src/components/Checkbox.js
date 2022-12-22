import React, { useState } from 'react';

function Checkbox({
  id,
  name,
  value,
  onChange,
  // onClick,
  // isChecked,
  clearAll,
  hidden,
}) {
  const [isChecked, setIsChecked] = useState(false);

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
