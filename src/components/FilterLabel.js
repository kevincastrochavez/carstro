import React, { useState } from 'react';

function FilterLabel({ option, colors, text }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <label
      className={`${
        colors && isSelected && 'filterLabel_selected'
      } filterLabel`}
      onClick={() => colors && setIsSelected(!isSelected)}
      htmlFor={`${option}-car`}
    >
      {colors ? (
        <img
          className='filterLabel_colorImg'
          src={`https://raw.githubusercontent.com/kevincastrochavez/carstro-cars-uploader/main/public/carColors/${option.toLowerCase()}.png`}
          alt={`Color ${option} for filtering by such`}
        />
      ) : (
        text
      )}
    </label>
  );
}

export default FilterLabel;
