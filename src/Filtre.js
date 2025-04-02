import React from "react";

const Filter = ({ handleFilterTitle, handleFilterRating }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => handleFilterTitle(e.target.value)} // Filtrage dynamique
      />
      <input
        type="number"
        placeholder="Rechercher par note..."
        onChange={(e) => handleFilterRating(e.target.value)} // Filtrage par note
      />
    </div>
  );
};

export default Filter;