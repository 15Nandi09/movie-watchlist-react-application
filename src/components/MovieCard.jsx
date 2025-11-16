import "../css/MovieCard.css";
import { useEffect, useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { getMovieDetails } from "../services/api";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.imdbID);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      const data = await getMovieDetails(movie.imdbID);
      setDetails(data);
    }
    loadDetails();
  }, [movie.imdbID]);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.imdbID);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
        />

        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>

          {details && (
            <div className="overlay-details">
              <p><strong>Genre:</strong> {details.Genre}</p>
              <p><strong>IMDb:</strong> ⭐ {details.imdbRating}</p>
              <p><strong>Actors:</strong> {details.Actors}</p>
            </div>
          )}
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>

        {details && (
          <p className="release-date">
            <strong>Release Date:</strong> {details.Released}
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
