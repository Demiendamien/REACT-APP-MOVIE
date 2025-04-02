import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={{ border: "4px solid #ccc", margin: "10px", padding: "10px", width: "200px", borderRadius: "25px"}}>
      <img src={posterURL} alt={title} style={{ width: "100%", height: "50%", borderRadius: "25px", marginBottom: "10px"}} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Note : {rating}</p>
    </div>
  );
};

export default MovieCard;