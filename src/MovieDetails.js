import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.detailedDescription}</p>
      <iframe
        src={movie.trailerURL}
        title="Bande-annonce"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default MovieDetails;