import React from "react";

const Filter = ({ handleFilterTitle, handleFilterRating }) => {
  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => handleFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rechercher par note..."
        onChange={(e) => handleFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;