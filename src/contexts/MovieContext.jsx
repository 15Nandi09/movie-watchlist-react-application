/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from storage on first render
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  // Save favorites to storage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    // prevent duplicates
    setFavorites((prev) => {
      if (prev.some((fav) => fav.imdbID === movie.imdbID)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (imdbID) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
  };

  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
