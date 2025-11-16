const API_KEY = "419d9b34";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(`${BASE_URL}&s=${encodeURIComponent(query)}&page=${page}`);
  const data = await response.json();
  return data.Search || [];
};

export const getMovieDetails = async (imdbID) => {
  const response = await fetch(`${BASE_URL}&i=${imdbID}`);
  const data = await response.json();
  return data;
};
