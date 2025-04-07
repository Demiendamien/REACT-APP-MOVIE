import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating }) => {
  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (rating) => {
    if (rating < 0 || rating > 5) {
      console.error("Rating hors de la plage autorisée.");
      rating = Math.max(0, Math.min(5, rating)); // Limiter entre 0 et 5
    }
    const stars = Math.round(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars); // Compléter avec des étoiles vides
  };

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Note : {rating} <span className="stars">{renderStars(rating)}</span>
      </p>
      <Link to={`/movie/${title}`}>Voir les détails</Link>
    </div>
  );
};

export default MovieCard;