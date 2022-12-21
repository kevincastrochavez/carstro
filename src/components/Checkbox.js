import React from 'react';

function Checkbox({
  id,
  name,
  value,
  onChange,
  onClick,
  isChecked,
  clearAll,
  hidden,
}) {
  return (
    <input
      type='checkbox'
      id={`${id}-car`}
      name={name}
      value={value}
      checked={clearAll ? false : isChecked}
      onChange={onChange}
      onClick={onClick}
      hidden={hidden && true}
    />
  );
}

export default Checkbox;
