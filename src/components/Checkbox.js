import React from 'react';

function Checkbox({ id, name, value, onChange, onClick, isChecked, clearAll }) {
  return (
    <input
      type='checkbox'
      id={`${id}-car`}
      name={name}
      value={value}
      checked={clearAll ? false : isChecked}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default Checkbox;
